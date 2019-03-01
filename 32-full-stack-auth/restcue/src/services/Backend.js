const API = "http://localhost:3000"

export function getDogs() {
  return fetch(`${API}/dogs`).then(res => res.json())
}

export function createDog(dogInfo) {
  return fetch(`${API}/dogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Token": localStorage.getItem("token")
    },
    body: JSON.stringify(dogInfo)
  }).then(res => res.json())
}

export function getAuthToken(loginInfo) {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginInfo)
  }).then(res => res.json())
}
