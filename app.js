let raceNumber = Math.floor (Math.random () * 1000);
let earlyRunners = true;
let runnerAge = 12;

if (runnerAge >= 18 && earlyRunners) {
    raceNumber += 1000;
}
// earlyRunners = false;  -- this is to check the else if statement.

if (runnerAge >=18 && earlyRunners) {
    console.log(`Early registrated adults run at 9:30, with race number: ${raceNumber}`);
} else if (runnerAge >=18 && earlyRunners == false) {
    console.log(`Later registrated adults run at 11.30, with race number: ${raceNumber}`);
} else if (runnerAge <18) {
    console.log(`Youth registrants run at 12:30, with race number: ${raceNumber}`);
}