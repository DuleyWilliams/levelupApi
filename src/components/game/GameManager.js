export const getGames = () => {
  return fetch("http://localhost:8000/games", {
    headers: {
      Authorization: `Token ${localStorage.getItem("lu_token")}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
