const btn = document
  .getElementById("first-btn")
  .addEventListener("click", function () {
    const number = document.getElementById("numbers").innerText;
    const convertNumber = parseInt(number);
    const num = 1;
    const result = convertNumber + num;
    document.getElementById("numbers").innerText = result;
    alert("Fix Mobile Button Issue is successful");
  });
btn.disabled = true;
