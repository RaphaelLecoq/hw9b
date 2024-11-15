function displayFormData() {
  const form = document.getElementById("form");
  const formData = new FormData(form);

  fetch("/ex1", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData.entries())),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      return response.text();
    })
    .then(data => {
      const res = document.createElement("p");

      res.textContent = data;
      document.body.appendChild(res);
    })
}

function cancel() {
  document.getElementById("form").reset();
}