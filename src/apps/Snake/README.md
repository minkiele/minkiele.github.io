# Snake

One of my forgotten dreams was to build a clone of Snake that could run on a browser,
the one that was included in the Nokia 3210 cellphone.
Yes, **the** [Nokia 3210](https://en.wikipedia.org/wiki/Nokia_3210),
the dad of all cool phones. In 1999 it had interchangeable covers,
background logos and custom ringtones you sent yourself via SMS, and games.
The game I liked the most was Snake, at the time we passed hours in buses
asking to borrow our friend's phones just to try and fill the screen with that Snake,
mostly because we didn't have cellphones.

## The process

So I started by stating facts: I found some pictures of Snake being played on the 3210,
and I wrote them down. Measuring the picture I found out that the board is 24x17. Then
I remembered that the snake got longer only when the eaten fruit reached its tail.
I cannot recall how it started so I put the snake on the most probable location.

Through some iterations I then simplified the calculations. The simplest way to print
the game was through a table representing each pixel of the game, unfortunately this
is pretty heavy (you need to re-render a 308 matrix every iteration knowing that
graphically only 3 elements change at most),
so the next optimization will be to get rid of the table and draw only the elements
that need to be changed.

## Instructions

To play on desktop press the *arrows*, *WSAD*, spacebar or
enter. To pause the game press spacebar or enter, to resume it press
the *arrows*, *WSAD*, spacebar or enter. When game is over you can reset
it by pressing the Reset button or spacebar or enter.

To play on mobile just press the buttons (swipe would be too slow to capture).
