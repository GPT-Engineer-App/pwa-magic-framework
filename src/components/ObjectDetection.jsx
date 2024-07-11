import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSelector } from 'react-redux';

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [streaming, setStreaming] = useState(false);
  const [objectCounts, setObjectCounts] = useState({});
  const isOnline = useSelector((state) => state.network.isOnline);

  useEffect(() => {
    const loadObjectDetectionModel = async () => {
      if (!isOnline) {
        console.log('App is offline. Cannot load model.');
        return;
      }
      try {
        await tf.ready();
        const loadedModel = await cocossd.load();
        setModel(loadedModel);
        console.log('COCO-SSD model loaded successfully');
      } catch (error) {
        console.error('Failed to load COCO-SSD model:', error);
      }
    };
    loadObjectDetectionModel();
  }, [isOnline]);

  const startVideo = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setStreaming(true);
        }
      } catch (error) {
        console.error('Error accessing the webcam:', error);
      }
    }
  };

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setStreaming(false);
      setObjectCounts({});
    }
  };

  const detectObjects = async () => {
    if (!model || !streaming) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const detectFrame = async () => {
      const predictions = await model.detect(video);
      
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);

      const newCounts = {};
      predictions.forEach(prediction => {
        const [x, y, width, height] = prediction.bbox;
        const label = prediction.class;

        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = '#00FFFF';
        ctx.fillText(
          `${label} (${Math.round(prediction.score * 100)}%)`,
          x,
          y > 10 ? y - 5 : 10
        );

        newCounts[label] = (newCounts[label] || 0) + 1;
      });

      setObjectCounts(newCounts);

      requestAnimationFrame(detectFrame);
    };

    detectFrame();
  };

  useEffect(() => {
    if (streaming) {
      detectObjects();
    }
  }, [streaming, model]);

  if (!isOnline) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Object Detection Unavailable</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You are currently offline. Object detection requires an internet connection.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Real-time Object Detection</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full max-w-xl"
            style={{ display: streaming ? 'block' : 'none' }}
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <div className="flex space-x-4">
          <Button onClick={startVideo} disabled={streaming}>
            Start Webcam
          </Button>
          <Button onClick={stopVideo} disabled={!streaming}>
            Stop Webcam
          </Button>
        </div>
        {Object.keys(objectCounts).length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Object</TableHead>
                <TableHead>Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(objectCounts).map(([object, count]) => (
                <TableRow key={object}>
                  <TableCell>{object}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default ObjectDetection;