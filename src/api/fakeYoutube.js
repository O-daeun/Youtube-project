import axios from "axios";

export default class FakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId ? item.id.videoId : item.id.channelId })));
  }

  async #mostPopular() {
    return axios(`/videos/popular.json`).then((res) => res.data.items);
  }
}
