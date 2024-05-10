// Varialbe For Datepicker
let datePicker = document.getElementById("datePicker");
let choseDate = document.getElementById("choseDate");

// Variable For Prinitng Values
let ageYear = document.getElementById("ageYear");
let ageMonth = document.getElementById("ageMonth");
let ageDays = document.getElementById("ageDays");
let ageHours = document.getElementById("ageHours");
let ageSeconds = document.getElementById("ageSeconds");
let ageMiliSeconds = document.getElementById("ageMiliSeconds");

// datePicker function
datePicker.addEventListener("change", function () {
  let options = { year: "numeric", month: "long", day: "numeric" };
  let selectedDate = new Date(this.value);
  let DOB = selectedDate.toLocaleDateString("en-us", options);
  choseDate.innerHTML = " DOB : " + "" + DOB;

  let mileSecond_Btw_DOB = Date.parse(DOB);
  let mileSecond_Btw_Now = Date.now();
  let age_in_MiliSecond = mileSecond_Btw_Now - mileSecond_Btw_DOB;

  let miliSeconds = age_in_MiliSecond;
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let year = day * 365;

  // Now Start The Calculation
  let years = Math.round(miliSeconds / year);
  let months = years * 12;
  let days = years * month;
  let hours = Math.round(miliSeconds / hour);
  let seconds = Math.round(miliSeconds / second);

  // Now it is time to print values  in box
  console.log(years);
  ageYear.innerHTML = years;

  ageMonth.innerHTML = months;
  ageDays.innerHTML = days;
  ageHours.innerHTML = hours;
  ageSeconds.innerHTML = seconds;
  ageMiliSeconds.innerHTML = miliSeconds;

  document.querySelector(".age-calc").classList.add("expand");
});
