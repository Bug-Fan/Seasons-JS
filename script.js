const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
let result;

const season = function () {
  const hemi = document.getElementById("hemisphere").value;
  const inputDate = document.getElementById("date").value;

  findSeason(hemi, inputDate);
};

const findSeason = function (hemi, inputDate) {
  const [month, date] = inputDate.split(", ");
  const objDate = new Date(
    Date.parse(`${months.indexOf(month.toLowerCase()) + 1}-${date}`)
  );

  if (
    ["N", "S"].includes(hemi) &&
    months.includes(month.toLowerCase()) &&
    !isNaN(objDate.getDate())
  ) {
    calculate(hemi, objDate);
    document.getElementById("hemidate").innerHTML = `${(hemi === "N") ? "North" : "South"}, 
    ${months[objDate.getMonth()][0].toUpperCase()}${months[objDate.getMonth()].slice(1)} 
    ${objDate.getDate()}`;
    document.getElementById("result").innerHTML = result;
  } else document.getElementById("result").innerHTML = "Invalid Date Entered";
};

const calculate = function (hemi, objDate) {
  if (
    hemi === "N" &&
    objDate >= new Date(Date.parse("03-01")) &&
    objDate <= new Date(Date.parse("05-31"))
  )
    result = "Spring";
  else if (
    hemi === "S" &&
    objDate >= new Date(Date.parse("03-01")) &&
    objDate <= new Date(Date.parse("05-31"))
  )
    result = "Autumn";
  else if (
    hemi === "N" &&
    objDate >= new Date(Date.parse("06-01")) &&
    objDate <= new Date(Date.parse("08-31"))
  )
    result = "Summer";
  else if (
    hemi === "S" &&
    objDate >= new Date(Date.parse("06-01")) &&
    objDate <= new Date(Date.parse("08-31"))
  )
    result = "Winter";
  else if (
    hemi === "N" &&
    objDate >= new Date(Date.parse("09-01")) &&
    objDate <= new Date(Date.parse("11-30"))
  )
    result = "Autumn";
  else if (
    hemi === "S" &&
    objDate >= new Date(Date.parse("09-01")) &&
    objDate <= new Date(Date.parse("11-30"))
  )
    result = "Spring";
  else if (
    hemi === "N" &&
    (objDate >= new Date(Date.parse("12-01")) ||
      objDate <= new Date(Date.parse("02-28")))
  )
    result = "Winter";
  else if (
    hemi === "S" &&
    (objDate >= new Date(Date.parse("03-01")) ||
      objDate <= new Date(Date.parse("05-31")))
  )
    result = "Summer";
  else console.log("Invalid");
};