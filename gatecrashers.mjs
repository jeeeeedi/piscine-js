import http from "http";
import { writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

const bffs = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const data = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const fileName = `${req.url.slice(1)}.json`;
  let authHead = req.headers["authorization"];
  if (!authHead) {
    res
      .writeHead(401, {
        "Content-Length": Buffer.byteLength(
          JSON.stringify({ error: "unauthorized" })
        ),
      })
      .end(JSON.stringify({ error: "unauthorized" }));
    return;
  }
  let credentials = Buffer.from(authHead.slice(6), "base64")
    .toString()
    .split(":");
  if (!bffs.includes(credentials[0]) || credentials[1] !== "abracadabra") {
    res
      .writeHead(401, {
        "Content-Length": Buffer.byteLength(
          JSON.stringify({ error: "unauthorized" })
        ),
      })
      .end(JSON.stringify({ error: "unauthorized" }));
    return;
  }
  let bodyReq = req.headers["body"];
  writeFile(`guests/${fileName}`, bodyReq)
    .then(() => {
      let bodyRes = bodyReq;
      res
        .writeHead(200, {
          "Content-Length": Buffer.byteLength(bodyRes),
        })
        .end(bodyRes);
    })
    .catch((err) => {
      res
        .writeHead(401, {
          "Content-Length": Buffer.byteLength(
            JSON.stringify({ error: "unauthorized" })
          ),
        })
        .end(JSON.stringify({ error: "unauthorized" }));
    });
};
const server = http.createServer(data);
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
