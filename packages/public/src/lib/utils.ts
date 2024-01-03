import { either, isEmpty, isNil } from "ramda";

export const isNullOrEmpty = either(isNil, isEmpty);
