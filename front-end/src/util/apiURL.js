export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://lit-fortress-73842.herokuapp.com";
};
