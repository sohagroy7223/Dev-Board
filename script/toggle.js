const btn = document.getElementById("first-btn");
btn.addEventListener("click", function () {
  btnClickToAddNumber("numbers");
  btn.disabled = true;

  btnClickToOddNumber("number");
  activityLogOutput("history");

  alert("Fix Mobile Button Issue is successful");
});
