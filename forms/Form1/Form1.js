
/*declared variables*/
let myState = prompt("enter a two-letter, capitalized state");
let myTemp = prompt ("enter the current outside temperature in Fahrenheit");
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat, and gloves. Maybe a scarf too."]
let myName = "Mary";

/*set up the cases*/
switch (true){
case myState = "NE" && myTemp < 32:
   console.log(`${myName}, ${messages[0]}`);
   break;

case myState = "NE" && myTemp >= 32 && myTemp <= 50:
   console.log(`${myName}, ${messages[1]}`);
   break;

case myState = "FL" && myTemp >= 32 && myTemp <= 50:
   console.log(`${myName}, ${messages[2]}`);
   break;

case myState = "FL" && myTemp > 50 && myTemp <= 70:
   console.log(`${myName}, ${messages[3]}`);
   break;
}