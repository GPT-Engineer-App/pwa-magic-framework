import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ObjectDetection from '../../components/ObjectDetection';

// Mock the TensorFlow and COCO-SSD libraries
jest.mock('@tensorflow/tfjs', () => ({
  ready: jest.fn().mockResolvedValue(true),
}));

jest.mock('@tensorflow-models/coco-ssd', () => ({
  load: jest.fn().mockResolvedValue({
    detect: jest.fn().mockResolvedValue([
      { bbox: [0, 0, 100, 100], class: 'person', score: 0.9 },
    ]),
  }),
}));

describe('ObjectDetection Component', () => {
  beforeEach(() => {
    // Mock the video and canvas elements
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
      clearRect: jest.fn(),
      drawImage: jest.fn(),
      strokeRect: jest.fn(),
      fillText: jest.fn(),
    }));
  });

  it('renders correctly', () => {
    render(<ObjectDetection />);
    expect(screen.getByText('Real-time Object Detection')).toBeInTheDocument();
    expect(screen.getByText('Start Webcam')).toBeInTheDocument();
    expect(screen.getByText('Stop Webcam')).toBeDisabled();
  });

  it('starts webcam when "Start Webcam" button is clicked', async () => {
    const mockGetUserMedia = jest.fn().mockResolvedValue({});
    global.navigator.mediaDevices = { getUserMedia: mockGetUserMedia };

    render(<ObjectDetection />);
    fireEvent.click(screen.getByText('Start Webcam'));

    await waitFor(() => {
      expect(mockGetUserMedia).toHaveBeenCalledWith({ video: true });
      expect(screen.getByText('Start Webcam')).toBeDisabled();
      expect(screen.getByText('Stop Webcam')).not.toBeDisabled();
    });
  });

  it('stops webcam when "Stop Webcam" button is clicked', async () => {
    const mockGetUserMedia = jest.fn().mockResolvedValue({
      getTracks: () => [{ stop: jest.fn() }],
    });
    global.navigator.mediaDevices = { getUserMedia: mockGetUserMedia };

    render(<ObjectDetection />);
    fireEvent.click(screen.getByText('Start Webcam'));
    await waitFor(() => {
      expect(screen.getByText('Stop Webcam')).not.toBeDisabled();
    });

    fireEvent.click(screen.getByText('Stop Webcam'));
    await waitFor(() => {
      expect(screen.getByText('Start Webcam')).not.toBeDisabled();
      expect(screen.getByText('Stop Webcam')).toBeDisabled();
    });
  });

  it('displays object counts when detection is running', async () => {
    const mockGetUserMedia = jest.fn().mockResolvedValue({});
    global.navigator.mediaDevices = { getUserMedia: mockGetUserMedia };

    render(<ObjectDetection />);
    fireEvent.click(screen.getByText('Start Webcam'));

    await waitFor(() => {
      expect(screen.getByText('Object')).toBeInTheDocument();
      expect(screen.getByText('Count')).toBeInTheDocument();
      expect(screen.getByText('person')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });
});