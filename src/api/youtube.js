export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => ({
          ...item,
          id: item.id.videoId ? item.id.videoId : item.id.channelId,
        }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async detail(videoId) {
    return this.apiClient
      .detail({
        params: {
          part: "snippet",
          id: videoId,
        },
      })
      .then((res) => res.data.items[0])
  }

  async channel(channelId) {
    return this.apiClient
      .channel({
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0])
  }

  
}
