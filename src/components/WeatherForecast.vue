<template>
  <section class="forecast">
    <h1 class="forecast__city">{{resultForecast.name}}</h1>
    <h2 class="forecast__description">{{resultForecast.weather[0].description}}</h2>

    <div class="forecast__weather">
      <span class="weather__temp">{{resultForecast.main.temp.toFixed()}}°</span>
      <img :src="`http://openweathermap.org/img/wn/${resultForecast.weather[0].icon}@2x.png`" alt="Weather icon">
    </div>

    <span class="forecast__maxmin"><strong>MAX:</strong> {{resultForecast.main.temp_max.toFixed()}}° <strong>MIN:</strong> {{resultForecast.main.temp_min.toFixed()}}°</span>

    <button class="forecast__button" @click="handleFiveDays">{{getButtonTranslated}}</button>
  </section>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '@/stores/weather';
export default {
  setup() {
    const weatherStore = useWeatherStore();
    const { resultForecast, currentPage, isCelsiusSelected, selectedLang } = storeToRefs(weatherStore);
    const { getWeatherForecast } = weatherStore;

    return {
      resultForecast,
      currentPage,
      isCelsiusSelected,
      selectedLang,
      getWeatherForecast,
    }
  },
  methods: {
    handleFiveDays() {
      this.currentPage = "NextFiveDays"
    }
  },
  watch: {
    isCelsiusSelected() {
      this.getWeatherForecast(this.resultForecast.name)
    },
    selectedLang() {
      this.getWeatherForecast(this.resultForecast.name)
    }
  },
  computed: {
    getButtonTranslated: function() {
      const langPhs = {"Português": "Ver previsão para os próximos 5 dias", "English": "See forecast for the next 5 days", "Español": "Ver previsión para los próximos 5 días"}
      return langPhs[this.selectedLang]
    },
  },
}
</script>

<style>
.forecast {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}

.forecast__city {
  font-weight: 700;
  font-size: 43px;
  line-height: 52px;
  text-align: center;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0;
}

.forecast__description {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.forecast__description::first-letter {
  text-transform: uppercase;
}

.forecast__weather {
  display: flex;
  align-items: center;
}

.weather__temp {
  font-weight: 400;
  font-size: 64px;
  line-height: 78px;
  letter-spacing: 0.05em;
}

.forecast__maxmin {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.forecast__button {
  background: none;
  border: 0;
  color: #FFF;
  font-size: 12px;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width: 767px) {
  .forecast__city {
    font-size: 29px;
    line-height: 35px;
  }

  .forecast__description {
    font-size: 14px;
    line-height: 17px;
  }

  .weather__temp {
    font-size: 48px;
    line-height: 59px;
  }

  .forecast__weather > img {
    width: 100%;
    max-width: 54px;
  }

  .forecast__button {
    margin-top: 5px;
  }

}
</style>