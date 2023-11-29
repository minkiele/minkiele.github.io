import { FunctionComponent, useReducer, useRef } from 'react';
import EnigmaMd from './README.md';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';
import {Enigma as EnigmaMachine, EnigmaM4 as EnigmaM4Machine, ReflectorD} from 'enigma-minkiele';

type EnigmaReflector = 'A' | 'B' | 'C' | 'D';
type EnigmaRotor = 'R1' | 'R2' | 'R3' | 'R4' | 'R5' | 'R6' | 'R7' | 'R8';
type EnigmaThinReflector = 'TB' | 'TC';
type EnigmaThinRotor = 'TBeta' | 'TGamma';

interface CommonEnigmaState {
  rotor1: EnigmaRotor;
  rotor2: EnigmaRotor;
  rotor3: EnigmaRotor;
  plugboard: Array<[string, string]>;
}

interface EnigmaState {
  type: 'M3';
  reflector: EnigmaReflector;
}

interface EnigmaM4State {
  type: 'M4';
  rotor4: EnigmaThinRotor;
  reflector: EnigmaThinReflector;
}



const useEnigma = () => {
  const machine = useRef<EnigmaMachine>();

  const [state, dispatch] = useReducer((state, action) => {
    return state;
  }, {

  });

};

const Enigma: FunctionComponent = () => {
  const [state, send] = useMachine(toggleMachine);
  return (
    <div>
      <EnigmaMd />
      <div>State: {state.value.toString()}</div>
      <button onClick={() => {
        send({
          type: 'toggle'
        });
      }}>Toggle state</button>
    </div>
  );
};

export default Enigma;
