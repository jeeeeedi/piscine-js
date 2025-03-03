import { readdir } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
let result = "";

try {
  const files = await readdir("./tell-me-how-many/guests");
  let firstName = "";
  let lastName = "";
  let fullName = "";
  let names = [];

  for (const fileName of files) {
    let filePath = "./tell-me-how-many/guests/" + fileName; // go to each file
    let content = await readFile(filePath, { encoding: "utf8" });
    let jsonData = JSON.parse(content); // Parse content as JSON

    // Check if "answer" key has "yes" value
    if (jsonData.answer === "yes") {
      // get name
      fullName = fileName.slice(0, -5).split("_");
      firstName = fullName[0];
      lastName = fullName[1];
      names.push(`${lastName} ${firstName}`);
    }
  }

  let sorted = names.sort(); // sort

  // print line by line
  let count = 0;
  let lines = [];
  for (const name of sorted) {
    count++;
    lines.push(`${count}. ${name}`);
  }
  result = lines.join("\n");

  await writeFile("vip.txt", result); // write to file
} catch (err) {
  console.error(err);
}
