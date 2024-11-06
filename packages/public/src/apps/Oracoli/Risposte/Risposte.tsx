import { FunctionComponent } from 'react';
import Answers, { AnswerLabels } from '../components/Answers/Answers';

import risposte from '../assets/risposte.json';
import Link from 'next/link';

const labels: AnswerLabels = {
  answer: 'Risposte',
  question: 'Domandime',
  askSomething: 'Domandime qualcosa',
  submit: 'Struca',
};

const Risposte: FunctionComponent = () => (
  <div>
    <Answers answers={risposte} labels={labels} />
    <Link href="/oracoli">Torna indrio</Link>
  </div>
);

export default Risposte;
