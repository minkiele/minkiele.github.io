# Anagrammator

Get anagrams for the provided input.

**Warning**: since the growth of the number is almost
exponential I capped the generator. If total number of anagrams exceed
10000 they won't be generated, but you can see stats about them.

Added a very stupid control to print only words that can be valid italian
words. It will skip couples of words that are evidently invalid in the italian
grammar (e.g. A *Q* can be followed only by a *U* or by another *U*).
This is just a first -admittedly- very stupid screening as rules generally involve
groups of 3 or more letters, here repeating the same consonant thrice will result in a valid
word. Unfortunately rules are extremely complex, groups could be of 2, 3 or 4 letters,
as we have many words borrowed from greek, latin, french, english and german.
