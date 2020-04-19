import React, { useRef } from 'react';
import { useUserMedia } from '../hooks/useUserMedia';
import { predictPokemon } from '../prediction';

const CAPTURE_OPTIONS = {
  video: { facingMode: 'environment' },
};

const CameraStream = ({onCapture}) => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  const restart = () => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    videoRef.current.play();
  }

  const handleClick = async () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    videoRef.current.pause();
    onCapture(await predictPokemon(canvasRef.current));
  }

  return (
    <div id="pokedex-container">
      <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
      <canvas id="canvas" ref={canvasRef} hidden></canvas>
      <button onClick={handleClick}>Who's that Pokémon?</button>
      <button type="button" onClick={restart}>Retry</button>
    </div>
  )
}

export default CameraStream;


