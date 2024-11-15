let countries = [];

function addCountry() {
  const country = document.getElementById("country").value;
  const year = parseInt(document.getElementById("year").value, 10);

  if (country && year) {
    countries.push({name: country, year: year});
  } else {
    console.error("Input error");
  }
  document.getElementById("country").value = "";
  document.getElementById("year").value = "";
}

function getEmptyOutput() {
  let res = document.getElementById("result");
  if (!res) {
    res = document.createElement("p");
    res.id = 'result';
    document.body.appendChild(res);
  }

  res.innerHTML = '';
  return res;
}

function sendData() {
  const userName = document.getElementById("name");

  if (!userName) {
    console.error("Please enter a name and one country");
    return;
  }

  const data = {
    name: userName.value,
    countries: countries.length
  }

  fetch("/ex2", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      return response.text();
    })
    .then(data => {
      const res = getEmptyOutput();

      res.textContent = data;
    })
    .catch(error => {
      console.error("Error sending data: ", error);
    })
}