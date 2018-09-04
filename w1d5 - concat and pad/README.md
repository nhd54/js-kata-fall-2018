# JS-KATA

## Week 1, Day 5

### Concat'n'pad

This time we are only working with JavaScript. No HTML or CSS.

We want to make a function for building numbered filenames from a given pattern and a number. The pattern is a string, with # where the number should be. The number is just a number - but we want all numbers to be two digits, `03` rather than `3`.

#### Your task

Make a function that receives a 'pattern'-string and a number.  
It returns a string based on the pattern, with # replaced by the number, padded to atleast two digits.

Examples:

```javascript
concatNPad("image#.jpg", 3);
```

would return `'image03.jpg'`

```javascript
concatNPad("image#_small.png", 12);
```

would return `'image12_small.png'`

Test the function directly in the console, call it with various patterns and numbers.

#### Hints

Use some or more of these String-methods:

- `.indexOf`
- `.substring`
- `.replace`
- `.padStart`
- `.padEnd`

#### Test

Test the function with these inputs, and make sure you get the corresponding output:

| Pattern           | Number | Output               |
| ----------------- | -----: | -------------------- |
| 'image#.jpg'      |      3 | 'image03.jpg'        |
| 'image#.jpg'      |     12 | 'image12.jpg'        |
| 'image#.jpg'      |    123 | 'image123.jpg'       |
| '#\_chapter.txt'  |      1 | '01_chapter.txt'     |
| '#\_chapter.txt'  |     10 | '10_chapter.txt'     |
| 'myfile_backup.#' |      8 | 'myfile_backup.08'   |
| 'myfile_backup.#' |     39 | 'myfile_backup.39'   |
| 'myfile_backup.#' |   2018 | 'myfile_backup.2018' |

### Optional

If you feel like a challenge, modify your function, so that the number of #s in the pattern, determines the number of digits.  
E.g.

```javascript
concatNPad("image##.jpg", 3);
```

would return `'image03.jpg'`

```javascript
concatNPad("image###.png", 3);
```

would return `'image003.png'`

#### Tip:

Use `.indexOf` and `.lastIndexOf` to find the number of #s
