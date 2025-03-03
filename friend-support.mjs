import http from "http";
import fs from "fs/promises";
import path from "path";

const server = http.createServer(async (req, res) => {
  const guestName = path.basename(req.url); // Extract guest name from URL

  const filePath = path.join("./guests", `${guestName}.json`);

  // Set response header for JSON content
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    try {
      const data = await fs.readFile(filePath, "utf8");
      res.statusCode = 200;
      res.end(data);
    } catch (err) {
      if (err.code === "ENOENT") {
        // Handle Error NO ENTry: file/dir not found
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "guest not found" }));
      } else {
        // <handle server error
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
      }
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
