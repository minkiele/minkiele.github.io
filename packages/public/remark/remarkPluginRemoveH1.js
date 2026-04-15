// Minimum signature for a remark plugin that removes all the h1 from a markdown
// And it is compatible with
module.exports = () => {
  const utilRemove = import('unist-util-remove');
  return (tree) =>
    utilRemove.then(({ remove }) => {
      remove(tree, (node) => node.type === 'heading' && node.depth === 1);
    });
};
