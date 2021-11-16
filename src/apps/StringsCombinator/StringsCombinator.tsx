import { thunkify, times } from "ramda";
import { ChangeEvent, useMemo, useState } from "react";
import {v4 as getRandomId} from 'uuid';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { StringCase, getCombinations } from "./StringsCombinator.utils";

interface FormFriendlyStringCase extends StringCase {
  id: string;
}

interface StringCombinatorForm {
  strong: boolean;
  ucFirst: boolean;
  prefix: string;
  variants: number;
  cases: Array<FormFriendlyStringCase>;
}

const getInitialState = (): FormFriendlyStringCase => ({ id: getRandomId(), letter: "", cases: [], many: "" });
const toString = (input: unknown) => JSON.stringify(input, null, 4);

const StringsCombinator = (): JSX.Element => {
  const [combinations, setCombinations] = useState<string>(toString({}));
  const { control, handleSubmit, watch } = useForm<StringCombinatorForm>({
    defaultValues: {
      strong: false,
      ucFirst: false,
      prefix: "",
      cases: [getInitialState()],
      variants: 3,
    },
  });
  const {
    fields: cases,
    append,
    remove: removeIndex,
  } = useFieldArray({ control, name: "cases" });

  const watchVariants = watch('variants');
  const variants = useMemo(() => Math.max(1, watchVariants - 2), [watchVariants]);

  const handleRemove = thunkify(removeIndex);

  const handleAppend = () => {
    append(getInitialState());
  };

  const onSubmitValid: SubmitHandler<StringCombinatorForm> = ({
    cases,
    prefix,
    strong,
    ucFirst,
    variants
  }) => {
    setCombinations(toString(getCombinations(cases, prefix, ucFirst, strong, variants)));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <Controller
          name="prefix"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <div>
              <label htmlFor={field.name}>Prefix</label>
              <input {...field} placeholder="assenzeElenco" />
              {invalid && <p>{error?.message}</p>}
            </div>
          )}
          rules={{
            required: "Prefix required",
          }}
        />
        <Controller
          name="variants"
          control={control}
          render={({
            field: { onChange, ...field },
            fieldState: { invalid, error },
          }) => {
            const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
              const newVariants = Number(evt.target.value);
              onChange(isNaN(newVariants) ? 1 : newVariants);
            };

            return (
              <div>
                <label htmlFor={field.name}>Variants</label>
                <input {...field} onChange={handleChange} placeholder="3" />
                {invalid && <p>{error?.message}</p>}
              </div>
            );
          }}
          rules={{
            required: "Variant number required",
          }}
        />
        {cases.map((stringCase, index) => (
          <fieldset key={stringCase.id} id={`cases.${index}` as const}>
            <Controller
              name={`cases.${index}.letter`}
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <div>
                  <label htmlFor={field.name}>Letter</label>
                  <input {...field} maxLength={1} placeholder="A" />
                  {invalid && <p>{error?.message}</p>}
                </div>
              )}
              rules={{
                required: "Input required",
                maxLength: {
                  value: 1,
                  message: "Input too long",
                },
              }}
            />
            {times(
              (time) => (
                <Controller
                  name={`cases.${index}.cases.${time}` as const}
                  control={control}
                  render={({ field, fieldState: { invalid, error } }) => (
                    <div>
                      <label htmlFor={field.name}>Variant {time + 1}</label>
                      <input {...field} placeholder="un'assenza giornaliera" />
                      {invalid && <p>{error?.message}</p>}
                    </div>
                  )}
                  rules={{
                    required: `Variant ${time + 1} required`,
                  }}
                />
              ),
              variants,
            )}
            <Controller
              name={`cases.${index}.many` as const}
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <div>
                  <label htmlFor={field.name}>Many</label>
                  <input {...field} placeholder="{{na}} assenze giornaliere" />
                  {invalid && <p>{error?.message}</p>}
                </div>
              )}
              rules={{
                required: "Variant Many required",
              }}
            />
            <button type="button" onClick={handleRemove(index)} title="Remove">
              -
            </button>
          </fieldset>
        ))}
        <button type="button" onClick={handleAppend} title="Add one">
          +
        </button>
        <Controller
          name="ucFirst"
          control={control}
          render={({ field: { value, ...field } }) => (
            <div>
              <label htmlFor={field.name}>Uppercase First</label>
              <input
                type="checkbox"
                {...field}
                value="ucFirst"
                checked={value}
              />
            </div>
          )}
        />
        <Controller
          name="strong"
          control={control}
          render={({ field: { value, ...field } }) => (
            <div>
              <label htmlFor={field.name}>Strong</label>
              <input
                type="checkbox"
                {...field}
                value="ucFirst"
                checked={value}
              />
            </div>
          )}
        />
        <button type="submit">Generate</button>
      </form>
      <pre>
        <code>{combinations}</code>
      </pre>
    </div>
  );
};

export default StringsCombinator;
