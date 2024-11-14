"use strict";
document.getElementById("btn").onclick = function () {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;
  var num1 = Number(data1);
  var num2 = Number(data2);
  var num3 = Number(data3);

  var TotalMarks = num1 + num2 + num3;
  var Percentage = (TotalMarks / 300) * 100;
  var grade;

  var msg = "";

  if (data1 === "" || data2 === "" || data3 === "") {
    msg = "Please enter all fields!";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "All fields should contain numeric values!";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "All fields should contain positive numeric values!";
  } else if (data1 >= 40 && data2 >= 40 && data3 >= 40) {
    if (Percentage < 40) {
      grade = "Failed";
    } else if (Percentage < 50) {
      grade = "D";
    } else if (Percentage < 60) {
      grade = "C";
    } else if (Percentage < 70) {
      grade = "B";
    } else if (Percentage < 80) {
      grade = "A";
    } else if (Percentage < 90) {
      grade = "A+";
    } else {
      grade = "O";
    }

    document.getElementById("y1").innerHTML = TotalMarks;
    document.getElementById("y2").innerHTML = Percentage.toFixed(2); // to limit percentage to 2 decimal points
    document.getElementById("y3").innerHTML = grade;
  } else {
    document.getElementById("y1").innerHTML = TotalMarks;
    document.getElementById("y2").innerHTML = Percentage.toFixed(2); // to limit percentage to 2 decimal points
    document.getElementById("y3").innerHTML = grade;

    console.log("failed");
  }

  document.getElementById("result").innerHTML = msg;
};
