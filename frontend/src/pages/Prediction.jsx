import React, { useRef, useEffect, useState } from 'react';
import { Camera } from '@mediapipe/camera_utils';
import { Hands } from '@mediapipe/hands';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

const Prediction = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const modelRef = useRef(null);
  const [gesture, setGesture] = useState(''); // State to store the predicted gesture

  useEffect(() => {
    // Load the TensorFlow.js model
    const loadModel = async () => {
      modelRef.current = await tf.loadLayersModel('https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json');
      console.log('Model loaded successfully');
    };

    loadModel();

    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    hands.onResults((results) => {
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext('2d');
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          console.log(landmarks);

          // Convert landmarks to a tensor
          const inputTensor = tf.tensor2d(
            landmarks.map((landmark) => [landmark.x, landmark.y, landmark.z]),
            [landmarks.length, 3]
          ).reshape([1, landmarks.length, 3]);

          // Make a prediction
          if (modelRef.current) {
            const predictionTensor = modelRef.current.predict(inputTensor);
            const predictedClass = predictionTensor.argMax(-1).dataSync()[0];
            console.log('Predicted Class:', predictedClass);

            // Map the predicted class to a gesture label
            const gestureMap = {
              
              0: 'Gesture A',
              1: 'Gesture B',
              2: 'Gesture C',
              3: 'Gesture D',
              4: 'Gesture E',
              5: 'Gesture F',
              6: 'Gesture G',
              7: 'Gesture H',
              8: 'Gesture I',
              9: 'Gesture J',
              10: 'Gesture K',
              11: 'Gesture L',
              12: 'Gesture M',
              13: 'Gesture N',
              14: 'Gesture O',
              15: 'Gesture P',
              16: 'Gesture Q',
              17: 'Gesture R',
              18: 'Gesture S',
              19: 'Gesture T',
              20: 'Gesture U',
              21: 'Gesture V',
              22: 'Gesture W',
              23: 'Gesture X',
              24: 'Gesture Y',
              25: 'Gesture Z',
              26: 'Gesture 0',
              27: 'Gesture 1',
              28: 'Gesture 2',
              29: 'Gesture 3',
              30: 'Gesture 4',
              31: 'Gesture 5',
              32: 'Gesture 6',
              33: 'Gesture 7',
              34: 'Gesture 8',
              35: 'Gesture 9',

              // Add more mappings based on your model's output classes
            };

            // Update the state with the predicted gesture
            setGesture(gestureMap[predictedClass] || 'Unknown Gesture');
          }

          drawConnectors(canvasCtx, landmarks, Hands.HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 5 });
          drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 2 });
        }
      }
      canvasCtx.restore();
    });

    if (typeof videoRef.current !== 'undefined' && videoRef.current !== null) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 1280,
        height: 720,
      });
      camera.start();
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} className="input-video" style={{ display: 'none' }}></video>
      <canvas ref={canvasRef} className="output-canvas" width="1280" height="720"></canvas>
      <div className="prediction-output">
        {gesture && <p>Predicted Gesture: {gesture}</p>}
      </div>
    </div>
  );
};

export default Prediction;
