import { paperMarkdown } from "./src/data.js";
const parts = paperMarkdown.split('$');
console.log("Total $ count:", parts.length - 1);
for(let i=0; i<parts.length; i++) {
  if (i % 2 !== 0) {
    console.log("MATH " + i + ": " + parts[i].substring(0, 30));
  } else {
    // console.log("TEXT " + i + ": " + parts[i].substring(0, 30));
  }
}
