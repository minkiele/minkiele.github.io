# HTML2JSX

Sometimes you just want to help a cow-orker.

You can use the <Now /> custom tag to add a custom React component.
The illusion is that the tag works flawlessly, but there are a few things to hammer out.

You can see in the HAST that the tag has been automatically lower-cased,
and we must force some types to make it work in TypeScript.
