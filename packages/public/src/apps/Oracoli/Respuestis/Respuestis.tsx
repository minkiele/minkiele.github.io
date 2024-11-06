import { FunctionComponent } from 'react';
import Answers, { AnswerLabels } from '../components/Answers/Answers';

import respuestis from '../assets/respuestis.json';
import Link from 'next/link';

const labels: AnswerLabels = {
  answer: 'Respueste',
  question: 'Domandimi',
  askSomething: 'Domandimi qualcosa',
  submit: 'Vonde monadis',
};

const Respuestis: FunctionComponent = async () => (
  <div>
    <Answers answers={respuestis} labels={labels} />
    <Link href="/oracoli">Torna indietro</Link>
  </div>
);

export default Respuestis;
