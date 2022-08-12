import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => {
    return {
      currentPage: "HomePage",
      isCelsiusSelected: true,
      selectedLang: "Português",
      resultForecast: {},
      resultFiveDays: {},
    };
  },
  actions: {
    async getWeatherForecast(typedCity) {
      let unitTemp = this.isCelsiusSelected ? "metric" : "imperial"
      const langCodes = {"Português": "pt_br", "Inglês": "en", "Espanhol": "es"}

      let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(typedCity)}&appid=637ae8f71a89e903dd09e10819360730&units=${unitTemp}&lang=${langCodes[this.selectedLang]}`;

      try {
        let response = await fetch(url);
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        let json = await response.json();
        console.log(json);
        this.resultForecast = json
        this.currentPage = "WeatherForecast"

      } catch (err) {
        console.log(err)
      }

    },
    async getFiveDaysForecast() {
      console.log('maoi')
      let unitTemp = this.isCelsiusSelected ? "metric" : "imperial"
      const langCodes = {"Português": "pt_br", "Inglês": "en", "Espanhol": "es"}

      let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.resultForecast.coord.lat}&lon=${this.resultForecast.coord.lon}&appid=637ae8f71a89e903dd09e10819360730&units=${unitTemp}&lang=${langCodes[this.selectedLang]}`;

      try {
        let response = await fetch(url);
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        let json = await response.json();
        console.log(json);
        this.resultFiveDays = json

      } catch (err) {
        console.log(err)
      }

    }
  },
});