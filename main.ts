import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Excuse: one line, in the hardware wallet's own voice.
// The wallet is a night-shift worker whose keys are off the clock:
// it already signed the user's 2 AM "emergency", and the next
// signature happens at sunrise. No battery/firmware/cold-storage joke.
const LINE =
  "It's 3 AM — my keys are off the clock, my screen's dark, and I already signed your 2 AM 'emergency'. Next signature at sunrise. Bring coffee.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (!LINE.trim()) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
