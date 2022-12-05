# Vietnam

A very basic implementation of the **Tower of Hanoi**. To solve it you must
move the pile from the left column to one of the others, but you can
move a smaller stone over a bigger one (or to an empty column). To move
a pile of n stones the minimum amount of moves is 2^n - 1, so to move
a 10 stones pile you'll take at least 1023 moves to make it properly.

Once you understand how it works it becomes a very repetitive task, and
the challenge becomes remembering where are you during the move, often
you'll forget which "sub-pile" you're taking down and which one you're
building up.

The procedure to solve a Tower of Hanoi can be boiled down to a very
simple recursive algorithm, so to move a stack of size n from one column
to another you must:

1. Move a sub-stack of size n - 1 to the third column;
2. Move the last stone to the second column;
3. Move the sub-stack of size n - 1 from the third to the second column;

Apply recursively this sequence to any sub stack you're trying to move.
