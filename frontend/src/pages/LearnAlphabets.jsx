import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

function App() {
    const webcamRef = useRef(null);
    const [prediction, setPrediction] = useState(null);

    const captureFrame = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = imageSrc;

            img.onload = async () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1); // Flip the image horizontally
                ctx.drawImage(img, 0, 0);

                const flippedImageSrc = canvas.toDataURL('image/jpeg');
                const response = await axios.post('http://localhost:5000/predict', { image: flippedImageSrc.split(',')[0] });
                setPrediction(response.data.prediction);
            };
        }
    };

    useEffect(() => {
        const interval = setInterval(captureFrame, 1000); // Capture frame every second
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>TensorFlow Model Prediction</h1>
            <Webcam 
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={640}
                height={480}
            />
            {prediction && <p>Prediction: {prediction}</p>}
        </div>
    );
}

export default App;
