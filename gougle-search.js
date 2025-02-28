async function queryServers(serverName, q) {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]);
}

async function gougleSearch(q) {
  const servers = ["web", "image", "video"];
  const timeout = new Promise((_, reject) =>
    setTimeout(reject, 80, new Error("timeout"))
  );

  const results = await Promise.all(
    servers
      .map((serverName) => queryServers(serverName, q))
      .map(async (p) => await Promise.race([p, timeout]))
  );

  // Map results to server names
  return servers.reduce((values, server, index) => {
    values[server] = results[index];
    return values;
  }, {});
}
