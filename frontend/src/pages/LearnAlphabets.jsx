import React, { useEffect, useRef, useState } from "react";
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
import hand_landmarker_task from '../model/hand_landmarker.task';

const LearnAlphabets = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [handPresence, setHandPresence] = useState(null);

    useEffect(() => {
        let handLandmarker;
        let animationFrameId;

        const initializeHandDetection = async () => {
            try {
                const vision = await FilesetResolver.forVisionTasks(
                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
                );
                handLandmarker = await HandLandmarker.createFromOptions(vision, {
                    baseOptions: { modelAssetPath: hand_landmarker_task },
                    numHands: 2,
                    runningMode: "video"
                });
                detectHands();
            } catch (error) {
                console.error("Error initializing hand detection:", error);
            }
        };

        const drawLandmarks = (landmarksArray) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'blue';

            const circleCoordinates = [];

            landmarksArray.forEach((landmarks, handIndex) => {
                landmarks.forEach((landmark, landmarkIndex) => {
                    const x = landmark.x * canvas.width;
                    const y = landmark.y * canvas.height;

                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, 2 * Math.PI); // Draw a circle for each landmark
                    ctx.fill();

                    circleCoordinates.push({
                        hand: handIndex + 1,
                        landmark: landmarkIndex + 1,
                        x,
                        y,
                    });
                });
            });

            return circleCoordinates;
        };

        const detectHands = () => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
                const detections = handLandmarker.detectForVideo(videoRef.current, performance.now());
                setHandPresence(detections.handednesses.length > 0);

                if (detections.landmarks) {
                    const circleCoords = drawLandmarks(detections.landmarks);
                    console.log("Circle coordinates:", circleCoords);
                }
            }
            animationFrameId = requestAnimationFrame(detectHands);
        };

        const startWebcam = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                await initializeHandDetection();
            } catch (error) {
                console.error("Error accessing webcam:", error);
            }
        };

        startWebcam();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
            if (handLandmarker) {
                handLandmarker.close();
            }
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <>
            <h1>Is there a Hand? {handPresence ? "Yes" : "No"}</h1>
            <div style={{ position: "relative" }}>
                <video ref={videoRef} autoPlay playsInline style={{ width: "600px", height: "480px" }}></video>
                <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "600px", height: "480px" }}></canvas>
            </div>
        </>
    );
};

export default LearnAlphabets;
