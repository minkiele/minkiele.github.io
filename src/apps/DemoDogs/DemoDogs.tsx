import { FunctionComponent, useState } from "react";
import { join, pickOne, weight } from "../../lib/polygram/Collection";

// DEMODOGS :D

const barbon = join("Barbon", pickOne("e", "cino"));
const volp = join("Volp", pickOne("ino", "one"));

const races = pickOne(
  "Carlino",
  "Pastore",
  "Beagle",
  "Mastino",
  weight(barbon, 2),
  weight(volp, 2),
  "Shiba",
  "Chihuahua",
  "Lupo",
  "Cirneco",
  "Rottweiler",
  "Dobermann",
  "Pitbull",
  "Labrador",
  "Golden",
  "Schnauzer",
  "Akita",
  "Bull",
  "Levriero",
  "Dalmata",
  "Boxer",
  "Bulldog",
  "Jack",
  "Alano",
  "Basset",
  "Bassotto",
  "Bouledogue"
);

const variants = pickOne("Inu", "Retriever", "Terrier", "Russell", "Hound", "Spaniel");

const nationalities = pickOne(
  "Napoletano",
  "Americano",
  "Tedesco",
  "Cecoslovacco",
  "Inglese",
  "Italiano",
  "dell'Etna",
  "Messicano",
  "Australiano",
  "Giapponese",
  "Afghano",
  "Francese"
);
const dogRaces = join(
  races,
  pickOne("", weight(variants, 2)),
  pickOne("", weight(nationalities, 2))
).withSeparator(" ");

const getDemoDogs = (): Array<string> => {
    const demoDogs: Array<string> = [];
    for (let i = 0; i < 10; i += 1) {
    demoDogs.push(dogRaces.toString().trim());
    }
    return demoDogs;
};

const DemoDogs: FunctionComponent = () => {
    const [demoDogs, setDemoDogs] = useState<Array<string>>(getDemoDogs());
    const handleDemoDogs = () => {
        setDemoDogs(getDemoDogs());
    };
    return (<div>
    <ul>
        {demoDogs.map((demoDog) => <li key={demoDog}>{demoDog}</li>)}
    </ul>
    <button onClick={handleDemoDogs}>Gimme more Demodogs</button>
</div>)};

export default DemoDogs;
