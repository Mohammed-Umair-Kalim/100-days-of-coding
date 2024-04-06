"use strict";
// Question 106: Determine if a given year is a leap year using comparison operators ?
// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400.
// This rule helps align our calendar years with the Earth's orbital period.
// Answer 106:
let leap_year = 2024;
if (leap_year % 4 === 0 && leap_year % 100 !== 0 || leap_year % 400 === 0) {
    console.log("\nIt is a leap year!!!");
}
else {
    console.log("\nIts not a leap year!");
}
console.log(leap_year);
