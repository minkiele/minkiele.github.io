"use client"

import { FunctionComponent } from 'react';
import OracoliMd from './README.md';
import Link from 'next/link';

const Oracoli: FunctionComponent = () => (
  <div>
    <OracoliMd />
    <ul>
        <li><Link href="/oracoli/respuestis">Saggezza friulana</Link></li>
        <li><Link href="/oracoli/risposte">Scaltrezza giuliana</Link></li>
    </ul>
  </div>
);

export default Oracoli;
