module.exports = (options) => {
  const rehypeMathML = import('@daiji256/rehype-mathml').then(
    ({ default: rehypeMathML }) => rehypeMathML(options)
  );
  return (tree) => rehypeMathML.then((rmml) => rmml(tree));
};
