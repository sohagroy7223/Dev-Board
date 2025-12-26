const btn = document.getElementById("first-btn");
btn.addEventListener("click", function () {
  btnClickToAddNumber("numbers");
  btn.disabled = true;

  btnClickToOddNumber("number");
  activityLogOutput("history");

  alert("Fix Mobile Button Issue is successful");
});

const btn2 = document.getElementById("2nd-btn");
btn2.addEventListener("click", function () {
  btnClickToAddNumber("numbers");
  btn2.disabled = true;

  btnClickToOddNumber("number");
  activityLogOutput("history");

  alert("Add Dark Mode is successful");
});
