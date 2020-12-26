import { API_KEY_OPENCAGADATA } from "@/api";

export default class Geolocation {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getUrl() {
    return `https://api.opencagedata.com/geocode/v1/json?q=${this.latitude}%2C${this.longitude}&language=en&key=${API_KEY_OPENCAGADATA}`;
  }

  getCityCountry() {
    return this.makeRequest().then(rawResult => {
      const city = rawResult.results[0].components.city;
      const country = rawResult.results[0].components.country;
      return {
        city,
        country
      };
    });
  }

  makeRequest() {
    const url = this.getUrl();
    return fetch(url).then(response => {
      if (response.status !== 200) {
        throw Error(`response status is ${response.status}`);
      }
      return response.json();
    });
  }
}
