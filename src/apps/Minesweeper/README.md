# Minesweeper

That's it. I don't have anything else to do. Well, I know there's a lot to
fix and optimize but now I'm too tired.

## How it works

I tried to replicate the original game but there are some things I had to change
to make it work in mobile and with dark theme. There are two modes, Click mode and Flag mode.

### Click mode

When in click mode you can click on every tile. By clicking an empty uncoverd tile you will go to
*Flag mode*. By clicking a number you will expose all the tiles around (only if there are the number's
amount of tiles flagged). By pressing *command* on *macOS* and *alt* on other O.S. on an
uncovered tile you will flag it.

### Flag mode

When in flag mode you can only flag uncovered tiles. No more, no less (well you can still click
empty uncovered tiles and go back to *Click mode*).
