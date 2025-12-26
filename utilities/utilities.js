function btnClickToAddNumber(id) {
  const textValue = document.getElementById(id).innerText;
  const convertTextValue = parseInt(textValue);
  const numb = 1;
  const result = convertTextValue + numb;
  document.getElementById(id).innerText = result;
}
function btnClickToOddNumber(id) {
  const textValues = document.getElementById(id).innerText;
  const convertTextValues = parseInt(textValues);
  const num = 1;
  const results = convertTextValues - num;
  document.getElementById(id).innerText = "0" + results;
}
function activityLogOutput(id) {
  const history = document.getElementById(id);
  const p = document.createElement("p");
  p.innerText = "you have complete the task Add Dark Mode is successful ";
  history.appendChild(p);
}
