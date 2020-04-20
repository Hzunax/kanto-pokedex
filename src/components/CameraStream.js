import React, { useRef, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useUserMedia } from '../hooks/useUserMedia';
import { predictPokemon } from '../prediction';
import { useStyles } from '../hooks/useStyles';

const CAPTURE_OPTIONS = {
  video: { facingMode: 'environment' },
};

const CameraStream = ({onCapture, setResumeVideo}) => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const classes = useStyles();

  useEffect(() => {
    setResumeVideo(() => restart);
  }, []);

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
      <video id="player" ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
      <canvas id="canvas" ref={canvasRef} hidden></canvas>
      <div id="capture-container">
        <Button id="capture-button" className={classes.colorful} onClick={handleClick}>Who's that Pokémon?</Button>
      </div>
    </div>
  )
}

export default CameraStream;


