const btn = document.getElementById("first-btn");
btn.addEventListener("click", function () {
  const number = document.getElementById("numbers").innerText;
  const convertNumber = parseInt(number);
  const num = 1;
  const result = convertNumber + num;
  document.getElementById("numbers").innerText = result;
  btn.disabled = true;
  const numb = document.getElementById("number").innerText;
  const convertNumbers = parseInt(numb);
  const nums = 1;
  const results = convertNumbers - nums;
  document.getElementById("number").innerText = "0" + results;

  const history = document.getElementById("history");
  const p = document.createElement("p");
  p.innerText =
    "you have complete the task Fix Mobile Button Issue is successful ";
  history.appendChild(p);
  alert("Fix Mobile Button Issue is successful");
});
