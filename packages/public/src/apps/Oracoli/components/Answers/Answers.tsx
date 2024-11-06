"use client";

import dayjs from 'dayjs';
import { ChangeEventHandler, FC, FormEventHandler, useEffect } from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const Q = Symbol('Question');
const A = Symbol('Answer');

interface StoreDef {
  answers: Array<string>;
  values: Array<{
    type: symbol;
    value: string;
    timestamp: string;
  }>;
  next: symbol;
  setAnswers: (answers: Array<string>) => void;
  answerRandomly: () => void;
  form: {
    value: string;
    setValue: (value: string) => void;
    submitQuestion: () => void;
  };
}

const useAnswersStore = create<StoreDef>()(
  immer((set) => ({
    answers: [],
    values: [],
    next: Q,
    answerRandomly: () =>
      set((state) => {
        state.values.push({
          type: A,
          value:
            state.answers[Math.floor(Math.random() * state.answers.length)],
          timestamp: dayjs().toISOString(),
        });
        state.next = Q;
      }),
    form: {
      value: '',
      setValue: (value) =>
        set((state) => {
          state.form.value = value;
        }),
      submitQuestion: () =>
        set((state) => {
          state.values.push({
            type: Q,
            value: state.form.value,
            timestamp: dayjs().toISOString(),
          });
          state.next = A;
          state.form.value = '';
        }),
    },
    setAnswers: (answers) =>
      set((state) => {
        state.answers = answers;
        state.values = [];
        state.next = Q;
        state.form.value = '';
      }),
  }))
);

const useAnswers = (answers: Array<string>) => {
  const { setAnswers, ...store } = useAnswersStore();
  useEffect(() => {
    setAnswers(answers);
  }, [setAnswers, answers]);
  return store;
};

type AnswerLabelsKeys = 'askSomething' | 'question' | 'answer' | 'submit';

export type AnswerLabels = Record<AnswerLabelsKeys, string>;

interface AnswersProps {
  answers: Array<string>;
  labels: AnswerLabels;
}

const Answers: FC<AnswersProps> = ({ answers, labels }) => {
  const {
    values,
    answerRandomly,
    next,
    form: { value: input, setValue, submitQuestion: submit },
  } = useAnswers(answers);

  useEffect(() => {
    if (next === A) {
      answerRandomly();
    }
  }, [next, answerRandomly]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      {values.length === 0 ? (
        <p>{labels.askSomething}</p>
      ) : (
        <ul>
          {values.map(({ type, value }, index) => (
            <li key={`${type.toString()}-${value}-${index}`}>
              <strong>
                {type === Q && labels.question}
                {type === A && labels.answer}
              </strong>
              : {value}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          disabled={next === A}
        />
        <button type="submit" disabled={input.length === 0 || next === A}>
          {labels.submit}
        </button>
      </form>
    </div>
  );
};

export default Answers;
