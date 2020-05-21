const remoteURL = "http://localhost:8000";

export default {
  get(id) {
    return fetch(`${remoteURL}/parkareas/${id}`).then((result) =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/parkareas`).then((result) => result.json());
  },
};
