import { Children, useState } from "react";
import { useForm } from "react-hook-form";
import anagrammator from "../../lib/anagrammator";

interface AnagrammatorFormData {
  input: string;
}

function Anagrammator() {
  const [anagramms, setAnagramms] = useState<Array<string>>([]);
  const { handleSubmit, register } = useForm<AnagrammatorFormData>({
    defaultValues: {
      input: "",
    },
    mode: "onChange",
  });
  return (
    <div>
      <form
        onChange={handleSubmit((formData) => {
          setAnagramms(anagrammator(formData.input));
        })}
      >
        <input
          {...register("input", {
            required: true,
          })}
          type="text"
        />
      </form>
      {anagramms.length > 0 && (
        <ul>
          {Children.toArray(anagramms.map((anagramm) => <li>{anagramm}</li>))}
        </ul>
      )}
    </div>
  );
}

export default Anagrammator;
