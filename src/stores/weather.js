import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => {
    return {
      currentPage: "HomePage",
      isCelsiusSelected: true,
      selectedLang: "Português",
      resultForecast: {},
    };
  },
  actions: {
    async getWeatherForecast(typedCity) {
      let unitTemp = this.isCelsiusSelected ? "metric" : "imperial"
      const langCodes = {"Português": "pt_br", "English": "en", "Español": "es"}

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(typedCity)}&appid=637ae8f71a89e903dd09e10819360730&units=${unitTemp}&lang=${langCodes[this.selectedLang]}`;

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
      const langCodes = {"Português": "pt_br", "English": "en", "Español": "es"}

      let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.resultForecast.coord.lat}&lon=${this.resultForecast.coord.lon}&appid=637ae8f71a89e903dd09e10819360730&units=${unitTemp}&lang=${langCodes[this.selectedLang]}`;

      try {
        let response = await fetch(url);
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        let json = await response.json();
        console.log(json);
        return json.list.filter((el, i) => [0,8,16,24,32].includes(i))
      } catch (err) {
        console.log(err)
      }

    }
  },
});
