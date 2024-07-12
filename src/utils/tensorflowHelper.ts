import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as FileSystem from 'expo-file-system';

export const loadModel = async (modelJson: string, modelWeights: string[]) => {
  await tf.ready();
  const model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
  return model;
};

export const processImage = async (uri: string) => {
  const imgB64 = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
  const raw = new Uint8Array(imgBuffer);
  const imageTensor = decodeJpeg(raw);
  return imageTensor;
};

export const runPrediction = async (model: tf.LayersModel, imageTensor: tf.Tensor3D) => {
  const prediction = await model.predict(imageTensor.expandDims(0));
  return prediction;
};