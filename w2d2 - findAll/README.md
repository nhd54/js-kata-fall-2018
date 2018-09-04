# JS-KATA

## Week 2, Day 2

### findAll

You know how indexOf returns the position of the first occurence - in either a string or an array.

But what if there were more occurences?

I want a function `findAll( arr, search )` that I can use to look for all occurences of `search` in 
the array `arr`. The function must return another array, with the indexes of each occurence of `search`.

Example:
When you have created the function, you can run this code:
```javascript
const animals = ["dog", "cat", "horse", "cat", "mouse", "dog", "cat", "cat", "dog"];
const catsAt = findAll( animals, "cat" );
console.log( catsAt )
```
And `catsAt` would be an array `[2,3,6,7]`


### Hints

Look at the indexOf function - but don't return anything inside the loop.

Make the function create an empty solution-array, then iterate through the `arr`, and for every match,
push the index to the solution-array.
Then return the solution-array

### Optional

Make the function use filter, map or other array functions, rather than writing your own loop.
It might be a challenge combining them! (it is for me ...)
