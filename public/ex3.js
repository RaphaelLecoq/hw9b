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
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  if (!title || !content) {
    console.error("Please enter a title and content");
    return;
  }

  const data = {
    title: title.value,
    content: content.value
  }

  fetch("/ex3", {
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