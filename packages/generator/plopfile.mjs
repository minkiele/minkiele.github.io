import { glob } from 'node:fs/promises';

function data(offset = 0) {
  return async () => {
    let output = offset;
    for await (const entry of glob('*.md', {
      cwd: '../public/src/apps/Journal/entries',
    })) {
      output += 1;
    }
    return {
      data: {
        next: output.toLocaleString('it', {
          minimumIntegerDigits: 3,
          maximumFractionDigits: 0,
        }),
      },
    };
  };
}

export default function (plop) {
  plop.setGenerator('journal-entry', {
    description: 'Create a journal entry',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Entry name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../public/src/apps/Journal/entries/{{next}}-{{kebabCase name}}.md',
        templateFile: 'templates/new-entry.hbs',
        ...data(),
      },
      {
        type: 'append',
        path: '../public/src/apps/Journal/entries/index.ts',
        templateFile: 'templates/add-entry.hbs',
        ...data(-1),
      },
    ],
  });
}
