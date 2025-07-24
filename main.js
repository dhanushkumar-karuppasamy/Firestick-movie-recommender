async function fetchActorJobs() {
  const actorId = document.getElementById('actorId').value;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(`https://imdb8.p.rapidapi.com/actors/get-interesting-jobs?nconst=${actorId}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '09b138389dmsh99f3b96aafd31d0p159185jsna95953d9b94a',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    });

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    resultsDiv.innerHTML = `
      <h3>Jobs for ${actorId}</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  } catch (error) {
    resultsDiv.innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
  }
}
