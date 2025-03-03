import http from "http";
import fs from "fs/promises";
import path from "path";

const server = http.createServer((req, res) => {
  const guestName = path.basename(req.url); // Extract guest name from URL
  const filePath = path.join("./guests", `${guestName}.json`);
  res.setHeader("Content-Type", "application/json"); // Set response header for JSON content
  if (req.method === "POST") {
    let postData = "";
    // Collect data chunks from request body
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });

    // When data has been completely received
    req.on("end", async () => {
      try {
        // Parse data to JSON
        let jsonData;
        try {
          jsonData = JSON.parse(postData);
        } catch (err) {
          jsonData = postData; //if error, use same data
        }

        // Write JSON data to guest file (overwrite if it already exists)
        await fs.writeFile(
          filePath,
          typeof jsonData === "string"
            ? jsonData
            : JSON.stringify(jsonData, null, 2)
        );

        // Send JSON data back as response
        res.statusCode = 201;
        res.end(JSON.stringify(jsonData));
      } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
      }
    });
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
