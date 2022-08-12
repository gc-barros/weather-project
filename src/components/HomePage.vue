<template>
  <section class="home">
    <h1 class="home__title">{{getTextTranslated}}</h1>
    <input class="home__input" :class="{active: typedCity.length > 0}" type="text" :placeholder="getPhTranslated" v-model="typedCity" ref="input" @keypress.enter="getWeatherForecast(typedCity)">
  </section>
</template>

<script>
/* eslint-disable */
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '@/stores/weather';
export default {
  setup() {
    const weatherStore = useWeatherStore();
    const { selectedLang, isCelsiusSelected, resultForecast, currentPage } = storeToRefs(weatherStore);
    const { getWeatherForecast } = weatherStore;

    return {
      selectedLang,
      isCelsiusSelected,
      resultForecast,
      currentPage,
      getWeatherForecast
    }
  },
  data() {
    return {
      typedCity: "",
    }
  },
  computed: {
    getTextTranslated: function() {
      const langTexts = {"Português": "Como está o tempo hoje?", "English": "How is the weather today?", "Español": "¿Qué tiempo hace hoy?"}
      return langTexts[this.selectedLang]
    },
    getPhTranslated: function() {
      const langPhs = {"Português": "Digite o nome da cidade", "English": "Enter the city name", "Español": "Ingrese el nombre de la ciudad"}
      return langPhs[this.selectedLang]
    },
  },
  mounted() {
    const options = {
      types: ['(cities)'],
    }
    const google = window.google;
    const autocomplete = new google.maps.places.Autocomplete(this.$refs.input, options);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      var pickedCity = autocomplete.getPlace().name.split(",")[0];
      this.getWeatherForecast(pickedCity)
    });
  },
}
</script>

<style>
.home__title {
  font-weight: 700;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: 0.14em;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
}

.home__input {
  padding: 13px 15px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #6AA2D1;
  background: rgba(255, 255, 255, 0.77);
  border-radius: 10px;
  border: 0;
  width: 100%;
  outline: 0;
}

.home__input.active:focus {
  border-radius: 10px 10px 0 0;
}

.home__input::placeholder {
  color: #6AA2D1;
}

.pac-container {
  background: rgba(255, 255, 255, 0.77);
  box-shadow: 0px 4px 4px rgba(106, 162, 209, 0.8);
  border-radius: 0px 0px 10px 10px;
  margin-top: 0px;
  border-top: #6AA2D1 1px solid;
  padding-top: 10px;
  max-height: 135px;
  overflow: hidden;
}

.pac-item {
  padding: 5px 15px 5px 15px;
  color: transparent;
  border: 0;
}

.pac-item:last-child {
  padding-bottom: 0;
}

.pac-item:hover {
  background: transparent;
  cursor: pointer;
}

.pac-item:hover .pac-item-query {
  color: #D2B3C1;
}

.pac-item-query {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #6AA2D1;
}

.pac-matched {
  font-weight: 400;
}

.pac-icon{
  display: none;
}

@media screen and (max-width: 767px) {
  .home__title {
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.04em;
    margin-bottom: 19px;
  }

  .home__input {
    font-size: 16px;
    line-height: 20px;
    padding: 15px;
  }

  .pac-item-query {
    font-size: 16px;
    line-height: 20px;
  }
  
}
</style>