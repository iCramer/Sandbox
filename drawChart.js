/*
TEXT BAR GRAPHS
You are working in a system that (like CoderPad) only allows for monospaced text output. Users need to share numbers that are better understood graphically. Create code to help them translate numerical data into visual bar graphs.


PART 1: HORIZONTAL BAR GRAPH
Given an array of integers, create a horizontal bar graph where each entry translates into a row of dashes of that length (from top to bottom). For example, dataset [2, 1, 0, 1, 2, 4, 6] renders as:

--
-

-
--
----
------

Note that the third output line is blank to represent the 0 value.


PART 2: VERTICAL BAR GRAPH
Your users prefer vertical bar graphs, where each integer entry is shown as a column of |s (from left to right). Implement that so the dataset from Part 1 renders as:

      |
      |
     ||
     ||
|   |||
|| ||||


PART 3: USE BOX-DRAWING CHARACTERS
The system supports unicode box-drawing characters (└ ┌ ┴ ┐ ─ │). The designer wants you to use these to create a more polished looking graph. The dataset now renders as:

│                          ┌─┐  
│                          │ │  
│                      ┌─┐ │ │  
│                      │ │ │ │  
│  ┌─┐             ┌─┐ │ │ │ │  
│  │ │ ┌─┐     ┌─┐ │ │ │ │ │ │  
└──┴─┴─┴─┴─────┴─┴─┴─┴─┴─┴─┴─┴──
│                          ┌─┐ 
│                          │ │ 
│                      ┌─┐ │ │ 
│                      │ │ │ │ 
│  ┌─┐             ┌─┐ │ │ │ │ 
│  │ │ ┌─┐     ┌─┐ │ │ │ │ │ │ 
└──┴─┴─┴─┴─────┴─┴─┴─┴─┴─┴─┴─┴──
Upgrade your code to implement this design. 

Tip 1: The last line provides both the bottom of the bars ┴─┴ and the bottom border ───.
Tip 2: You can copy the necessary characters from the example graph.
Tip 3: To check your output, copy it from the "Program Output" to under the design. Your output should be character identical, including axes and column spacing.
*/

function horizontalChart(values) {
    for (let i = 0; i < values.length; i++) {
      let dashString = '';
      for (let j = values[i]; j > 0; j--) {
        dashString += '-';
      }
      console.log(dashString);
    }
  }
  
  function prettyChart(values) {
    let max = Math.max(...values);
    for (let i = max; i >= 0; i--) {
      let pipeString = i === 0 ? '└──' : '│  ';
      values.forEach(value => {
        if (value === i && i !== 0) {
         pipeString += '┌─┐ ';
        }
        else if (i === 0 && value !== 0) {
          pipeString += '┴─┴─'; 
        }
        else if (i === 0 && value === 0) {
          pipeString += '────'; 
        }
        else if (value >= i) {
          pipeString += '│ │ ';
        }
        else if (value < i) {
          pipeString += '    ';
        }
        
      });
      if (i === 0) pipeString += '─';
      console.log(pipeString);
    }
  }
  
  function verticalChart(values) {
    let max = Math.max(...values);
    for (let i = max; i > 0; i--) {
      let pipeString = '';
      values.forEach(value => {
        if (value >= i) {
          pipeString += '|';
        } else {
          pipeString += ' ';
        }
      });
      console.log(pipeString);
    }
  }
  
  horizontalChart([2, 1, 0, 1, 2, 4, 6]);
  verticalChart([2, 1, 0, 1, 2, 4, 6]);
  prettyChart([2, 1, 0, 1, 2, 4, 6]);
