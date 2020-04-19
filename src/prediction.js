import * as tmImage from '@teachablemachine/image';

const URL = 'https://teachablemachine.withgoogle.com/models/VBdZNVLcf/';
let model;

const init = async () => {
  const modelURL = `${URL}model.json`;
  const metadataURL = `${URL}metadata.json`;

  model = await tmImage.load(modelURL, metadataURL);
}

const predictPokemon = async (canvas) => {
  if(!model) {
    await init();
  }

  const prediction = await model.predict(canvas); // array containing all prediction objects with className and probability.
  prediction.sort((a, b) => b.probability - a.probability); // sort high to low probability
  return {
    name: prediction[0].className,
    probability: Math.round(prediction[0].probability * 100),
  }
}

export {
  init,
  predictPokemon,
}