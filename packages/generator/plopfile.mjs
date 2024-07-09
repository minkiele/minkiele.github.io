export default function(plop) {
    plop.setGenerator('journal-entry', {
        description: 'Create a journal entry',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Entry name'
        }],
        actions: [{
            type: 'add',
            path: '../public/src/apps/Journal/entries/{{name}}.md',
            templateFile: 'templates/new-entry.hbs'
        }, {
            type: 'append',
            path: '../public/src/apps/Journal/entries/index.ts',
            templateFile: 'templates/add-entry.hbs'
        }]
    });
}
