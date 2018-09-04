# JS-KATA

## Week 2, Day 1

### listMethods

You are going to create a function that iterates through some lists in an HTML-document

---

This kata contains some materials to get you started.  
Copy everything from the `materials` folder, to the `mysolution` folder.  
Use the terminal, and write: `cp ./materials/* ./mysolution/`

---

Look at the existing .js code - we need a function called listMethods, that accepts an HTML id, and a
name of a iterator-type. 


#### Your task

Make the function that receives the HTML id, and uses *qsa* (`document.querySelectorAll`) to find all the `li`s inside the `ul` inside the section with that id.

Then make the function iterate (loop) through all the found elements, and call the `displayElement` function on each one.

Try to make the function work with both `.forEach` and plain old `for` - just to get a feel for the difference.

### Optional

Modify the displayElement function to write a bullet in front of each line.

Make the listMethods function write the content of the h2, before listing the methods.

Add a second parameter to `listMethods` specifying if it should use `.forEach` or plain old `for`.