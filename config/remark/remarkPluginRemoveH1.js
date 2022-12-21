// Minimum signature for a remark plugin that removes all the h1 from a markdown
// And it is compatible with webpack
module.exports = () => (tree) => import('unist-util-remove').then(({ remove }) => {
    remove(tree, (node) => node.type === 'heading' && node.depth === 1);
});
