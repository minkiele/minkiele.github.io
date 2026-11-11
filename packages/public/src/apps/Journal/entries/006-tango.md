# Journal Entry

## Tango

So there's this LinkedIn puzzle called Tango, that sometimes is challenging.
You have a 6x6 board to fill with two kind of pawns: yellow suns and black moons.

There are a few rules to keep in mind:

- Each row and each column must contain 3 suns and 3 moons
- There cannot be three consecutive pawns of the same type
  in the same row or column.

The puzzle is presented with a few squares already filled and "locked in",
so the challenge is to complete the board.

There are additional hints on neighboring squares to guide you,
like "these 2 squares are identical/different".

I found it sometimes challenging, but there are some rules you can apply based on
the two main rules.

### Hint 1: board opposites

Sometimes you are presented with two pawn of the same type at the opposite sides of a board.

```
┌─┬─┬─┬─┬─┬─┐
│S│ │ │ │ │S│
├─┼─┼─┼─┼─┼─┤
```

You can immediately assign the adjacent cells to the opposite sign.

```
┌─┬─┬─┬─┬─┬─┐
│S│M│ │ │M│S│
├─┼─┼─┼─┼─┼─┤
```

### Hint 2: start with the same two

When a row starts with the same two symbols

```
┌─┬─┬─┬─┬─┬─┐
│S│S│ │ │ │ │
├─┼─┼─┼─┼─┼─┤
```

You can immediately assign the adjacent cell and the last cell with the opposite sign.

```
┌─┬─┬─┬─┬─┬─┐
│S│S│M│ │ │M│
├─┼─┼─┼─┼─┼─┤
```

### Hint 3: first and fifth of the same type

If the first and the fifth square are of the same type

```
┌─┬─┬─┬─┬─┬─┐
│S│ │ │ │S│ │
├─┼─┼─┼─┼─┼─┤
```

You can immediately assign the last square to the opposite type.

```
┌─┬─┬─┬─┬─┬─┐
│S│ │ │ │S│M│
├─┼─┼─┼─┼─┼─┤
```

This obviously works also for the second and sixth of the same type.

### Generalization

I think that these are the 3 less obvious derivations you can come up when analyzing all the cases. The others are more obvious due to the fact that there cannot be 3 consecutive pawns of the same type on the same row.

What was interesting after analyzing these cases is that you can generalize the behaviors in a modular way, as if the board was wrapped around on itself. So hints 1 and 2 could be generalized on the basic case of "_When 2 adjacent squares are of the same type you must wrap them with opposite type to avoid having 3 of a kind adjacents._"

Also the third hint can be expressed as "_When two equal pawns are one apart the gap must be filled with the opposite type to avoid having 3 of a kind adjacents._"

### Hint 4: two and one and an X

If you have

```
┌─┬─┬─┬─┬─┬─┐
│S│M│ │ X |M|
├─┼─┼─┼─┼─┼─┤
```

You can immediately assign the last square to the opposite type.

```
┌─┬─┬─┬─┬─┬─┐
│S│M│S│ X |M|
├─┼─┼─┼─┼─┼─┤
```

### Hint 5: one, an X and an equal

If you have

```
┌─┬─┬─┬─┬─┬─┐
│ │S│ X | = |
├─┼─┼─┼─┼─┼─┤
```

You can immediately fill the row with the following content

```
┌─┬─┬─┬─┬─┬─┐
│S│S│MXS|M=M|
├─┼─┼─┼─┼─┼─┤
```

It works for the piece put either on the first or the second square,
as you can see the result will be the same.
