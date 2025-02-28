async function isWinner(country) {
  try {
    const winner = await db.getWinner(country);

    //errors
    if (winner instanceof Error) {
      return `${winner.name} never was a winner`;
    } else if (winner.continent !== "Europe") {
      return `${winner.name} is not what we are looking for because of the continent`;
    }

    const results = await db.getResults(winner.id);

    if (results instanceof Error || results.length < 3) {
      return `${winner.name} is not what we are looking for because of the number of times it was champion`;
    }

    //for the winner
    let years = results.map((result) => result.year).join(", ");
    let scores = results.map((result) => result.score).join(", ");
    return `${winner.name} won the FIFA World Cup in ${years} winning by ${scores}`;
  } catch (error) {
    return `${country} never was a winner`;
  }
}
