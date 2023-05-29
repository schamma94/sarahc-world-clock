function updateTime() {
  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneTime = moment().tz("Australia/Melbourne");

  melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
  melbourneTimeElement.innerHTML = melbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Dubai
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
