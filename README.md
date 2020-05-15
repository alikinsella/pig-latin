| **spec** | **example input** | **example output** |
|------|---|---|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | 3 | 3 |
| The program adds "way" to single-letter words beginning with a vowel. | i | iway |
| The program adds "ay" to two-letter words beginning with a vowel. | it, of | itay, ofay |
| The program adds "ay" to three-letter words beginning with a vowel. | ill | illay |
| The program moves the first letter of two-letter words beginning with a consonant to the end and adds "ay." | do, to | oday, otay |
| The program moves the first letter of words of three or more letters beginning with a consonant to the end and adds "ay." | dot | otday |
| The program moves the first two letters of words beginning with a three-consonant cluster to the end and adds "ay." | truck | ucktray |
| The program moves the first three letters of words beginning with a three-consonant cluster to the end and adds "ay." | struck | uckstray |
| The program moves the first two letters of words beginning with a "qu" to the end and adds "ay." | queen | eenquay |
| The program moves the first three letters of words whose initial consonant is followed by with a "qu" to the end and adds "ay." | squawk | awksquay |
| The program moves the initial consonant "y" to the end and adds, "ay". | yes | esyay |