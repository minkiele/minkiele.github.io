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
      next: output.toLocaleString('it', {
        minimumIntegerDigits: 3,
        maximumFractionDigits: 0,
      }),
    };
  };
}

export default function (plop) {
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name',
      },
      {
        type: 'confirm',
        name: 'external',
        message: 'Is an external link?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'archived',
        message: 'Is archived?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'setTitle',
        message: 'Set page title?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'prefetch',
        message: 'Prefetch?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'list',
        message: 'List in the menu?',
        default: true,
      },
      {
        type: 'number',
        name: 'order',
        message: 'Set menu order',
      },
    ],
    actions: [
      {
        type: 'modify',
        path: '../public/src/apps/App/App.ts',
        templateFile: 'templates/pages/append-route.hbs',
        pattern: '/* please append other routes before this comment */',
      },
      {
        type: 'add',
        path: '../public/src/app/{{kebabCase name}}/page.ts',
        templateFile: 'templates/pages/add-page.hbs',
        skip: ({ external }) => (external ? 'External link' : undefined),
      },
      {
        type: 'add',
        path: '../public/src/apps/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/pages/add-component.hbs',
        skip: ({ external }) => (external ? 'External link' : undefined),
      },
      {
        type: 'add',
        path: '../public/src/apps/{{pascalCase name}}/README.md',
        templateFile: 'templates/pages/add-readme.hbs',
        skip: ({ external }) => (external ? 'External link' : undefined),
      },
    ],
  });
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
        data: data(),
      },
      {
        type: 'append',
        path: '../public/src/apps/Journal/entries/index.ts',
        templateFile: 'templates/add-entry.hbs',
        data: data(-1),
      },
    ],
  });
}
