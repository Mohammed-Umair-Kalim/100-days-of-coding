"use strict";
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score ?
// Explain & TIP: A common grading system assigns letter grades based on score ranges.
// You can use an if-else-if chain to determine the grade.
// Answer 110:
function grade(score) {
    let grade;
    if (score >= 90 && score < 101) {
        console.log(grade = "A");
    }
    else if (score >= 80 && score < 90) {
        console.log(grade = "B");
    }
    else if (score >= 70 && score < 80) {
        console.log(grade = "C");
    }
    else if (score >= 60 && score < 70) {
        console.log(grade = "D");
    }
    else if (score >= 50 && score < 60) {
        console.log(grade = "F");
    }
    else {
        console.log("Invalid Grade");
    }
}
grade(90);
grade(80);
grade(70);
grade(60);
grade(50);
grade(40);
