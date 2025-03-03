import { readFile, writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
import { argv } from "node:process";
const inFilename = argv[2] ? argv[2] : null;
const keyWord = argv[3] === "encode" || argv[3] === "decode" ? argv[3] : null;
const outFilename = argv[4] ? argv[4] : null;

try {
  // read file
  let input = await readFile(inFilename, { encoding: "utf8" });
  //let jsonData = JSON.parse(content); // Parse content as JSON

  if (keyWord === "encode") {
    //encode: convert your file to base64, then save the result in a cypher.txt file.
    let cypher = Buffer.from(input).toString("base64"); // Convert to base64
    await writeFile(outFilename || "cypher.txt", cypher); // Save result
  } else if (keyWord === "decode") {
    //decode: convert your file from base64, then save the result in a clear.txt file.
    let clear = Buffer.from(input, "base64").toString("utf8"); // Convert from base64
    await writeFile(outFilename || "clear.txt", clear); // Save result
  }
} catch (err) {
  console.error(err);
}
