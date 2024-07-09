import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';

/**
 * Loads the COCO-SSD model.
 * @returns {Promise<cocossd.ObjectDetection>} The loaded model.
 */
export async function loadModel() {
  try {
    await tf.ready();
    const model = await cocossd.load();
    console.log('COCO-SSD model loaded successfully');
    return model;
  } catch (error) {
    console.error('Error loading the COCO-SSD model:', error);
    throw error;
  }
}

/**
 * Runs object detection on the given input.
 * @param {cocossd.ObjectDetection} model - The COCO-SSD model.
 * @param {HTMLVideoElement | HTMLImageElement} input - The input element for detection.
 * @returns {Promise<cocossd.DetectedObject[]>} The detection results.
 */
export async function runPrediction(model, input) {
  try {
    const predictions = await model.detect(input);
    return predictions;
  } catch (error) {
    console.error('Error running prediction:', error);
    throw error;
  }
}

/**
 * Preprocesses input for the COCO-SSD model.
 * @param {HTMLVideoElement | HTMLImageElement} input - The input element.
 * @returns {tf.Tensor3D} The preprocessed input as a tensor.
 */
export function preprocessInput(input) {
  return tf.browser.fromPixels(input);
}

/**
 * Postprocesses the model's output by drawing bounding boxes and labels.
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {cocossd.DetectedObject[]} predictions - The detection results.
 */
export function postprocessOutput(ctx, predictions) {
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
  });
}