import http from "http";
import { writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

const USERNAME = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const PASSWORD = "abracadabra";

const server = http.createServer((req, res) => {
  const guestName = path.basename(req.url); // Extract guest name from URL
  const filePath = path.join("./guests", `${guestName}.json`);

  res.setHeader("Content-Type", "application/json"); // Set response header for JSON content

  // Authentication
  let authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: "unauthorized request" }));
    return;
  }

  // Extract and decode credentials
  let credentials = Buffer.from(authHeader.slice(6), "base64")
    .toString()
    .split(":");
  if (!USERNAME.includes(credentials[0]) || credentials[1] !== PASSWORD) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: "unauthorized request" }));
    return;
  }

  let body = req.headers["body"];

  // Write JSON data to guest file (overwrite if it already exists)
  writeFile(filePath, body)
    .then(() => {
      res
        .writeHead(200, { "Content-Length": Buffer.byteLength(body) })
        .end(body); // Send the same JSON data back in the response
    })
    .catch((err) => {
      res.statusCode = 500;
      res
        .writeHead(500, {
          "Content-Length": Buffer.byteLength(
            JSON.stringify({ error: "error" })
          ),
        })
        .end(JSON.stringify({ error: "error" }));
    });
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
