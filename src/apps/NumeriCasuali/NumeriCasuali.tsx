import { FunctionComponent, useState } from "react";
import { pronunciaNumero } from "../../lib/EnunciateNumbers";

const NUMBER_LENGTH = 32;

const getRandomNumber = (length = NUMBER_LENGTH): string => {
  const randomLength = Math.floor(Math.random() * length) + 1;
  let randomNumber = '';
  while(randomNumber.length < randomLength) {
    const randomDigit = Math.floor(Math.random() * 10);
    // Number must not start with zeroes (unless the number is zero so we can add it)
    if(randomLength === 1 || randomNumber.length > 0 || randomDigit !== 0) {
      randomNumber += randomDigit;
    }
  }
  return randomNumber;
}

interface NumeroCasuale {
  inNumero: string;
  aParole: string;
}
const pronunciaNumeroACaso = (): NumeroCasuale => {
  const inNumero = getRandomNumber();
  return {
    inNumero,
    aParole: pronunciaNumero(inNumero),
  };
};

const NumeriCasuali: FunctionComponent = () => {
  const [numeroCasuale, impostaNumeroCasuale] = useState<NumeroCasuale>(pronunciaNumeroACaso());

  const handleNextRandom = () => {
    impostaNumeroCasuale(pronunciaNumeroACaso());
  };

  return (
    <div>
      <p>Enunciate a number in italian language. I tried to put down in code the way I think we enunciate
        the numbers in Italy. This demo will generate a pseudo-random number between 1 and 10<sup>{NUMBER_LENGTH}</sup>,
      but it could really go up wherever you want.</p>
      <h2>{numeroCasuale.aParole} (<small>{numeroCasuale.inNumero}</small>)</h2>
      <button onClick={handleNextRandom}>Prossimo numero</button>
    </div>
  );
};

export default NumeriCasuali;
