const remoteURL = "http://localhost:8000";

export default {
  get(id) {
    return fetch(`${remoteURL}/itinerary/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/itinerary`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("kennywood-token")}`,
      },
    }).then((result) => result.json());
  },
};
