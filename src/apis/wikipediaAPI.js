  const fetchPromise = fetch("http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=god&format=jsonfm");
  fetchPromise.then(response => {
    return response.json();
  }).then(people => {
    console.log(people);
  });
