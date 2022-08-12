<template>
  <section class="home">
    <h1 class="home__title">{{getTextTranslated}}</h1>
    <input class="home__input" type="text" :placeholder="getPhTranslated" v-model="typedCity" ref="input" @keypress.enter="getWeatherForecast(typedCity)">
  </section>
</template>

<script>
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
      const langTexts = {"Português": "Como está o tempo hoje?", "Inglês": "How is the weather today?", "Espanhol": "¿Qué tiempo hace hoy?"}
      return langTexts[this.selectedLang]
    },
    getPhTranslated: function() {
      const langPhs = {"Português": "Digite o nome da cidade", "Inglês": "Enter the city name", "Espanhol": "Ingrese el nombre de la ciudad"}
      return langPhs[this.selectedLang]
    },
  },
}
</script>

<style scoped>
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

.home__input::placeholder {
  color: #6AA2D1;
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
  
}
</style>