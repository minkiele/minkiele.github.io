# HTML2JSX

Sometimes you just want to help a cow-orker.

You can use the `<Now />` custom tag to add a custom React component.
The illusion is that the conversion works flawlessly,
but there are a few coincidences that make this application work.

Basically you can see in the HAST that the tag has been automatically lower-cased,
but that's the parse5 html5 parsing engine that is normalizing this.
