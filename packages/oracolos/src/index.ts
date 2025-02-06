import { assign, createMachine } from 'xstate';

interface OracolosMachineTypes {
  input: {
    collection: Array<string>;
  };
  context: {
    userInput: string;
    conversation: Array<string>;
    collection: Array<string>;
  };
}

const oracolos = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QHsBOBDAxsgNs2AxKnGAC4DaADALqKgAO+AlqU8gHZ0gAeiALACYANCACeiAQL4A6SnLkAOSgE4AzKsoLVfAL46RaLLnwEArrDCoAku3qmKNLo1gs2nJD37CxiBQEZpAFYBbUC-LT8pAHZlXX0QQ2w8WGkmW3sCWFMAIwBbFipaD2dXDi5eBEEBaQA2Pkoa1UCawMoohWU-EXEEfyCQvlU6tT5ByjiDDCT8aVIACzSAazSoAm5YUnRSMGl0ADNt1AAKP1bKAEoCROMU+aWVwqdmVjKPCqjAhWkBZRrOwNi6hCqm6vmqlAG6gBgXqfGUAj08XYyAgcC412STxcL3coAqAFoaqCEIS9JMjMlpPRUMhcvRSFjSrjPL1lJQgvJInwFO0an4QT4EL9pH4amL-FF6pRQmSElMbql0gzis83OVEH4otUalFwlFJTqeYM+MS+mc5KpJIEAQI-rKMTM7uxluwoIyceqEIF1EFVJE-qM2dzlKaAubpVabXbEUA */
  id: 'oracolos',
  initial: 'prompt',
  types: {
    input: {},
    context: {},
  } as OracolosMachineTypes,
  context: ({ input }) => ({
    collection: input.collection,
    conversation: [],
    userInput: '',
  }),
  on: {
    reset: {
      actions: assign({
        conversation: [],
        userInput: '',
      }),
      target: 'prompt',
    },
    userInput: {
      actions: assign({
        userInput: ({ event }) => event.value,
      }),
      target: 'input',
    },
  },
  states: {
    prompt: {
      meta: {
        description: 'When user does not input anything',
      },
    },
    input: {
      meta: {
        description: 'When user filling out the question',
      },
      on: {
        submit: {
          actions: assign({
            conversation: ({ context }) => [
              ...context.conversation,
              context.userInput,
            ],
            userInput: '',
          }),
          target: 'thinking',
        },
      },
    },
    thinking: {
      meta: {
        description: 'Oracolo is thinking an answer'
      },
      after: {
        1500: {
          actions: assign({
            conversation: ({ context }) => [
              ...context.conversation,
              context.collection[
                Math.floor(Math.random() * context.collection.length)
              ],
            ],
          }),
          target: 'prompt',
        },
      },
    },
  },
});

export default oracolos;