# Sudoku

Simple Sudoku matrix. This whole application was born to actually
integrate yet another library I wrote to check the correctness of the
sudoku, then I added a sudoku generator. First by generating the matrix
where I found that with a high probability the 6th row would never complete,
adding a reset switch that would completely restart the generation in that case,
and second by adding some masks I copied from the *Settimana Enigmistica*. With
a little bit of good will I'll add other masks as I have plenty of those.
(It's kind of boring as you have to copy 81 values from a piece of paper).

I really don't know if the masks are enough to provide solvability to the
Sudoku, I didn't do any research on the Sudoku theoretics, I just
pieced together things I already knew by completing dozens and dozens of them.
