import * as dotenv from "dotenv";
import fs from "node:fs";

dotenv.config();

const dir = process.env.DIRECTORY;
const files = fs.readdirSync(dir);

for (const file of files) {
  console.log(file);
}
