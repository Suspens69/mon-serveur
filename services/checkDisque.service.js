import * as dotenv from "dotenv";
import fs from "node:fs";

dotenv.config(process.env.DIRECTORY);
console.log();
const dir = process.env.DIRECTORY;
const files = fs.readdirSync(dir);

for (const file of files) {
  console.log(file);
}
