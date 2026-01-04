# minkiele.github.io

If you are reading this page you probably are
either a search engine or (improbably) really curious about me.

## About this little project

This project started around the end of '22 because I had _plenty_ of free time,
so I rounded up a lot of little projects I wrote on my personal and work laptops
along the years, some of those already had a UI, to some others I built one
just for this purpose.

You will find the sources for this website in [GitHub](https://github.com/minkiele/minkiele.github.io).

### About the technology stack

The technology stack upon which this website is built is somewhat complex,
but it gave me the opportunity to experiment a little bit on what could be
built.

I started with a [Create React App](https://create-react-app.dev/) application
which provides out of the box a great deal of configuration necessary to produce
this kind of website.

Then I wanted to try and convert the project to a monorepo which combined the usage of
[git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) and tasks synchronization.
To accomplish that I used [Nx](https://nx.dev/core-features/run-tasks).

The next step was to make _Static Site Generation_ work and rather than
hack the CRA application I had I moved everything into a
[Next.js](https://nextjs.org/docs/pages/building-your-application/routing) app.
As I already had experience with Next's original pages router it was simpler to
convert `react-router`'s structure into Next's.

Last step was to convert the `pages router` application into the newer `app router`
application. It wasn't an immediate task, because I had to "rewire" all pages to
the new file structure and to overcome some incompatibilities between layout systems.
(nothing too fancy, I whipped up a wrapping functionality that provides the part removed
from layout to each page).

The last thing was to convert the usage of fonts and emojis to next.js's fonts library.

### About dark mode

Now _dark_ mode is the default when you visit for the first time the website.
The website was built using the _light_ theme, so for technical reasons
every time you reload the website light theme will flash briefly before setting
to dark mode. Unfortunately that's something I cannot remove without causing the
reverse problem. Trying to waste a little bit less energy.

### All that green is killing my eyes

Yeah I know. I will try for some time and if it becomes unbearable in a few days
I will revert to good old black and white. After several months of careful consideration
I decided to make it permanent.

## About other little projects

Yes, I have another little project published in Github:
[EnigmaUI](https://minkiele.github.io/EnigmaUI). This is a
javascript implementation of the Enigma Machine.

And yes it needed a little upgrade since it was deployed in 2016,
so I rewrote it in modern React, and this is the result: [enigma-ui](https://minkiele.github.io/enigma-ui).
