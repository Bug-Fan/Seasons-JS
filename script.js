let result;
const from = to = date => new Date(Date.parse(date));
const set = id => document.getElementById(id);

const months = [ "january", "february", "march", "april", "may", "june", "july", "august","september", "october", "november", "december" ];
const seasons = new Map();
seasons.set( ["N", from("03-01"), to("05-31")], "Spring" );
seasons.set( ["S", from("03-01"), to("05-31")], "Autumn" );
seasons.set( ["N", from("06-01"), to("08-31")], "Summer" );
seasons.set( ["S", from("06-01"), to("08-31")], "Winter" );
seasons.set( ["N", from("09-01"), to("11-30")], "Autumn" );
seasons.set( ["S", from("09-01"), to("11-30")], "Spring" );
seasons.set( ["N", from("12-01"), to("02-28")], "Winter" );
seasons.set( ["S", from("12-01"), to("02-28")], "Summer" );

const season = function () {
  const hemi = set( "hemisphere" ).value;
  const inputDate = set( "date" ).value;
  findSeason( hemi, inputDate );
};

// Validates entries and shows results.
const findSeason = function ( hemi, inputDate ) {

  const [ month, date ] = inputDate.split(", ");
  const objDate = from( `${months.indexOf(month.toLowerCase()) + 1}-${date}` );
  const isValidPole = ["N", "S"].includes(hemi);
  const isValidMonth = months.includes( month.toLowerCase() );
  const isValidDate =  !isNaN( objDate.getDate() );

  if ( isValidPole && isValidMonth && isValidDate ) {
  
    calculate(hemi, objDate);
    set("hemidate").innerHTML = `${hemi === "N" ? "North" : "South"}, ${capsMonth(objDate)}  ${objDate.getDate()}`;
    set("result").innerHTML = result;
    
  }
  else 
    set("result").innerHTML = "Invalid Data Entered";

};

const calculate = (hemi, objDate) =>{

  seasons.forEach( (value, key) => {

    if (["december", "january", "february"].includes(months[objDate.getMonth()])){
      if (key[0] === hemi && objDate >= key[1] || objDate <= key[2])
        result =  value;
    }

    if (key[0] === hemi && objDate >= key[1] && objDate <= key[2])
        result = value;
  });
}

// // Determines Season based on hemisphere and date
// const calculate = function (hemi, objDate) {
//   if (hemi === "N" && objDate >= from("03-01") && objDate <= to("05-31"))
//     result = "Spring";
//   else if (hemi === "S" && objDate >= from("03-01") && objDate <= to("05-31"))
//     result = "Autumn";
//   else if (hemi === "N" && objDate >= from("06-01") && objDate <= to("08-31"))
//     result = "Summer";
//   else if (hemi === "S" && objDate >= from("06-01") && objDate <= to("08-31"))
//     result = "Winter";
//   else if (hemi === "N" && objDate >= from("09-01") && objDate <= to("11-30"))
//     result = "Autumn";
//   else if (hemi === "S" && objDate >= from("09-01") && objDate <= to("11-30"))
//     result = "Spring";
//   else if (hemi === "N" && (objDate >= from("12-01") || objDate <= to("02-28")))
//     result = "Winter";
//   else if (hemi === "S" && (objDate >= from("12-01") || objDate <= to("02-31")))
//     result = "Summer";
//   else console.log("Invalid");
// };