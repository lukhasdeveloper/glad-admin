const sendBtn = document.getElementById("send")

const messageEl = document.querySelector(".msg")

function sendData(e) {
  e.preventDefault()
  const playerId = document.querySelector("#playerId").value.trim()
  fetch("https://glad-auth.herokuapp.com/add", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: {
      playerId,
    },
  })
    .then((r) => r.json())
    .then(
      (data) =>
        (messageEl.textContent =
          data.message ||
          "Erro - ".concat(
            Object.entries(data.error).join().replace(",", " : ")
          ))
    )
}

function checkText() {
  const playerId = document.querySelector("#playerId")
  playerId.value = playerId.value.trim()
  const isNull = () => playerId.value.match(/\d/g) == null
  if (isNull || playerId.value.match(/[A-z]/g)) {
    playerId.value = playerId.value.replace(/[A-z]/g, "")
  }
}
