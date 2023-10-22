import axios from "axios";

export async function search(keyword) {
  return axios(`/videos/${keyword ? "search" : "popular"}.json`).then(
    (res) => res.data.items
  );
}
