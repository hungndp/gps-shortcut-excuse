// The GPS Swears It Was a Shortcut — make.fun bounty entry.
// Writes the single GPS excuse (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the blame chain (map, road, driver),
// then the reversal — the GPS demotes itself to intern on the project.
const SETUP =
  "In my defence, your honour, the map swore that lake was a road, the road swore it was a shortcut, and you said 'just trust the GPS' — ";
const PUNCH = "so this was a group project, and I was only the intern.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 200

function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
