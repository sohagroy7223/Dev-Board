const time = document.getElementById("time");
function showTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 0 থাকলে সামনে 0 বসাবে
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerText =
    hours + ":" + minutes + ":" + seconds;
}

// প্রতি 1 সেকেন্ড পর পর update হবে
setInterval(showTime, 1000);

// page load হওয়ার সাথে সাথে দেখাবে
showTime();
