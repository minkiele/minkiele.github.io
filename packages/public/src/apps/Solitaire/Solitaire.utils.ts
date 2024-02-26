import { useReducer } from 'react';

const CR = Symbol('RED');
const CB = Symbol('BLACK');

const SC = Symbol('COME');
const SQ = Symbol('QUANDO');
const SF = Symbol('FUORI');
const SP = Symbol('PIOVE');

interface SolitaireCard {
  value: number;
  seed: symbol;
  color: symbol;
}

interface SolitaireStack {
  stack: Array<SolitaireCard>;
  covered: number;
}

interface SolitaireStorage {
  stack: Array<SolitaireCard>;
  seed: symbol | undefined;
}

interface UseSolitaireState {
  deck: Array<SolitaireCard>;
  stacks: Array<SolitaireStack>;
  storage: Array<SolitaireStorage>;
}

type UseSolitaireAction = {
  type: 'new';
};

const generateCard = (index: number): SolitaireCard => {
  const value = (index % 13) + 1;
  const seed = Math.floor(index / 13);
  return {
    // Value goes from 1 to 13: A 2 3 4 5 6 7 8 9 10 J Q K
    value,
    // Every 13 cards I increment the seed (first reds then blacks)
    seed: seed === 0 ? SC : seed === 1 ? SQ : seed === 2 ? SF : SP,
    // Every 2 seeds I change the color (in sync with the seed obviously)
    color: seed < 2 ? CR : CB,
  };
};

const generateDeck = () =>
  Array.from({ length: 54 }).map<SolitaireCard>((_, index) =>
    generateCard(index)
  );

const shuffler = () => Math.floor(Math.random() * 2) - 1;

const shuffleDeck = (deck: Array<SolitaireCard>) => deck.sort(shuffler);

const createStacks = (deck: Array<SolitaireCard>): Array<SolitaireStack> => {
  const stacks = Array.from({ length: 7 }).map<SolitaireStack>(
    (_, covered) => ({
      stack: [],
      covered,
    })
  );
  for (let i = 0; i < 7; i += 1) {
    for (let j = i; j < 7; j += 1) {
      const card = deck.pop();
      if (card != null) {
        stacks[j].stack.push();
      }
    }
  }
  return stacks;
};

const createStorage = () =>
  Array.from({ length: 4 }).map<SolitaireStorage>(() => ({
    stack: [],
    seed: undefined,
  }));

/**
 * L'indice dello storage è valido se
 * Sto già raccogliendo delle carte lì e la carta è quella successiva
 * Oppure sto mettendo l'asso in una pila nuova
 */
const isStorageIndexValid = (
  card: SolitaireCard,
  index: number,
  storage: Array<SolitaireStorage>
) =>
  (card.seed === storage[index].seed &&
    card.value === storage[index].stack.length + 1) ||
  (storage[index].stack == null && card.value === 1);

const useSolitaire = () => {
  const [state, dispatch] = useReducer(
    (state: UseSolitaireState, action: UseSolitaireAction) => {
      switch (action.type) {
        case 'new': {
          const deck = shuffleDeck(generateDeck());
          return {
            deck,
            stacks: createStacks(deck),
            storage: createStorage(),
          };
        }
      }
    },
    {
      deck: [],
      stacks: [],
      storage: [],
    }
  );
};
