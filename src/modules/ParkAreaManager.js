const remoteURL = "http://localhost:8000";

export default {
  getAll() {
    return fetch(`${remoteURL}/parkareas`).then((result) => result.json());
  },
};
