# HTML2JSX

Sometimes you just want to help a cow-orker.

You can use the `<Now />` custom tag to add a custom React component. If you pass
a `format="DD MMMM YYYY"` attribute it will switch to dayjs date time formatting.

Unfortunately you can see in the HAST that the tag has been automatically lower-cased,
but that's the `parse5` html5 parsing engine that is normalizing this, and also it won't
recognize self closing tags (which is a bummer) or JSX attributes `format={"DD MMMM YYYY"}`
which was kind of expected. Perhaps using some other tools, like `acorn` and `acorn-jsx` will
generate an AST that could be used to generate JSX element trees.
