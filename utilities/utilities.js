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
  p.innerText =
    "you have complete the task Fix Mobile Button Issue is successful ";
  history.appendChild(p);
}

function activityLogOutput1(id) {
  const history = document.getElementById(id);
  const p = document.createElement("p");
  p.innerText = "you have complete the task Add Dark Mode is successful ";
  history.appendChild(p);
}

function activityLogOutput2(id) {
  const history = document.getElementById(id);
  const p = document.createElement("p");
  p.innerText = "you have complete the task Optimize Home page  is successful ";
  history.appendChild(p);
}

function activityLogOutput3(id) {
  const history = document.getElementById(id);
  const p = document.createElement("p");
  p.innerText = "you have complete the task Optimize Home page  is successful ";
  history.appendChild(p);
}

function activityLogOutput4(id) {
  const history = document.getElementById(id);
  const p = document.createElement("p");
  p.innerText =
    "you have complete the task Integrate OpenAI API is successful ";
  history.appendChild(p);
}

function activityLogOutput5(id) {
  const history = document.getElementById(id);
  const p = document.createElement("p");
  p.innerText = "you have complete the task Optimize Home page  is successful ";
  history.appendChild(p);
}
