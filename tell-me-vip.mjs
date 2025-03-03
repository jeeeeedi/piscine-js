import { readdir, readFile, writeFile } from "node:fs/promises";
import { argv } from "node:process";
const guestsPath = argv[2] ? argv[2] : null;
let result = "";

try {
  const files = await readdir(guestsPath);
  let names = [];

  for (const fileName of files) {
    let filePath = `${guestsPath}/${fileName}`; // Dynamic path
    let content = await readFile(filePath, { encoding: "utf8" });
    let jsonData = JSON.parse(content); // Parse content as JSON

    // Check if "answer" key has "yes" value
    if (jsonData.answer === "yes") {
      let [firstName, lastName] = fileName.slice(0, -5).split("_"); // get name
      names.push(`${lastName} ${firstName}`);
    }
  }

  let sorted = names.sort(); // sort alpha

  // print line by line
  result = sorted
    .map((name, index) => `${index + 1}. ${name}`)
    .join("\n")
    .trim();

  await writeFile("vip.txt", result); // write to file
} catch (err) {
  console.error(err);
}
