async function series(functions) {
    const results = [];
    for (const func of functions) {
        results.push(await func());
    }
    return results;
}
