import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async detail() {
    return axios.get('/videos/detail.json');
  }

  async channelImageURL() {
    return axios.get('/videos/channel.json');
  }


}
