let str = " Hello, JavaScript! ";

// Length
console.log(str.length);

// Convert case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim spaces
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// Extract substrings
console.log(str.slice(1, 6));
console.log(str.substring(1, 6));
console.log(str.substr(1, 6));

// Replace text
console.log(str.replace("JavaScript", "JS"));
console.log(str.replaceAll(" ", "-"));

// Split string
console.log(str.split(","));

// Check for substrings
console.log(str.includes("JavaScript"));
console.log(str.startsWith(" Hello"));
console.log(str.endsWith("!"));

// Repeat string
console.log(str.repeat(2));

// Find character position
console.log(str.indexOf("J"));
console.log(str.lastIndexOf("a"));

// Access character
console.log(str.charAt(1));
console.log(str.charCodeAt(1));

// Concatenation
console.log(str.concat(" is awesome!"));

// Pad string
console.log(str.padStart(25, "*"));
console.log(str.padEnd(25, "*"));
