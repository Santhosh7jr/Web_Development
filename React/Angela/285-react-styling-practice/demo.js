const date = new Date().toLocaleTimeString();

const twoDigit = Number(date.slice(0, 2));
const currentTime = !isNaN(twoDigit) ? twoDigit : Number(date.slice(0, 1));

if (date.endsWith("am")) {
} else if (currentTime < 6 && date.endsWith("pm")) {
} else {
}

console.log(date.endsWith("am"));
