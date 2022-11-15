import { countBy, identity, pipe, toPairs } from "ramda";
import { UberMath } from "../../lib/ubermath";

export const getGroupedFactors = pipe(UberMath.factorize, countBy(identity), toPairs);
