import { DevTool } from "@hookform/devtools";
import dayjs from "dayjs";
import { thunkify } from "ramda";
import { BaseSyntheticEvent, ChangeEvent, Children, useEffect, useState } from "react";
import { Control, Controller, useFieldArray, useForm, useWatch } from "react-hook-form";

interface TestFormComplexData {
  id: string;
  field1: string;
  field2: string;
}

interface TestFormData {
  input1: string;
  input2: string;
  complex: Array<TestFormComplexData>;
}
interface TestFormComplexIteratorProps {
  control: Control<TestFormData>;
}

const getRandomId = () => `x${Math.random()}`;

function TestFormComplexIterator({ control }: TestFormComplexIteratorProps) {
  const {
    fields: complexes,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "complex",
  });

  const addComplex = () => {
    append({
      id: getRandomId(),
      field1: dayjs().toISOString(),
      field2: "",
    });
  };

  const handleDelete = thunkify((index: number) => {
    remove(index);
  });

  return (
    <div>
      {Children.toArray(
        complexes.map((complex, index) => (
          <TestFormComplex
            index={index}
            control={control}
            remove={handleDelete(index) as unknown as () => void}
          />
        ))
      )}
      <button type="button" onClick={addComplex}>
        Add Complex Field
      </button>
    </div>
  );
}

function TestForm() {
  const [action, setAction] = useState<"draft" | "publish">();
  const doSetAction = thunkify(setAction);

  const { control, handleSubmit } = useForm<TestFormData>({
    defaultValues: {
      input1: "TEST1",
      input2: "TEST2",
      complex: [
        {
          id: getRandomId(),
          field1: "FieldComplex1",
          field2: "FieldComplex2",
        },
      ],
    },
  });

  const allFields = useWatch({control});

  const submitHandler = (values: TestFormData, evt?: BaseSyntheticEvent) => {
    console.log(values, evt);
  };

  useEffect(() => {
    console.warn(allFields);
  }, [allFields]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <DevTool control={control} />
      <Controller
        name="input1"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <input type="text" {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
        rules={{
          validate: (input1: string) => {
            if (input1.length === 0) {
              return "Input1 is required";
            }
          },
        }}
      />
      <Controller
        name="input2"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <input type="text" {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
        rules={{
          validate: (input2: string) => {
            if (action === "publish" && input2.length === 0) {
              return "Input2 is required during publication";
            }
          },
        }}
      />
      <TestFormComplexIterator control={control} />
      <button type="submit" id="submit1" onClick={doSetAction("draft")}>
        Draft
      </button>
      <button type="submit" id="submit2" onClick={doSetAction("publish")}>
        Publish
      </button>
    </form>
  );
}

interface TestFormComplexProps {
  index: number;
  control: Control<TestFormData>;
  remove: () => void;
}

function TestFormComplex({ index, control, remove }: TestFormComplexProps) {
  return (
    <fieldset>
      <Controller
        name={`complex.${index}`}
        control={control}
        render={({ field: { name, onBlur, onChange, ref, value } }) => {
          const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
            onChange({
              ...value,
              field1: evt.target.value,
            });
          };
          return (
            <div>
              <input
                type="text"
                name={name}
                onBlur={onBlur}
                onChange={handleOnChange}
                ref={ref}
                value={value?.field1 || ""}
              />
            </div>
          );
        }}
      />
      <Controller
        name={`complex.${index}.field2`}
        control={control}
        render={({ field }) => {
          return (
            <div>
              <input type="text" {...field} />
            </div>
          );
        }}
      />
      <button type="button" onClick={remove}>
        X
      </button>
    </fieldset>
  );
}

export default TestForm;
