<template>
  <section class="fivedays">
    <h1 class="forecast__city">{{resultForecast.name}}</h1>
    <h2 class="forecast__description">Previsão para 5 dias</h2>

    <ul class="forecast__fivedays">
      <li class="fivedays__day" v-for="day in resultFiveDays.list.filter((el, i) => [0,8,16,24,32].includes(i))" :key="day.dt">
        <span class="day__date">{{
          new Date(day.dt_txt).toLocaleDateString('pt-BR', {weekday: 'short', month: 'short', day: 'numeric'}).replaceAll(".","").replace("de", "")
        }}</span>
        <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="Weather icon">
        <div class="day__maxmin">
          <span class="day__maxmin--temp">{{day.main.temp_min.toFixed()}}°</span>
          <div class="day__maxmin--gradient"></div>
          <span class="day__maxmin--temp">{{day.main.temp_max.toFixed()}}°</span>
        </div>
        <span class="day__description">{{day.weather[0].description}}</span>
      </li>
    </ul>


  </section>
</template>

<script>
import { useWeatherStore } from '@/stores/weather';
import { storeToRefs } from 'pinia';
export default {
  setup() {
    const weatherStore = useWeatherStore();
    const { resultForecast, currentPage, isCelsiusSelected, selectedLang, resultFiveDays } = storeToRefs(weatherStore);
    const { getFiveDaysForecast } = weatherStore;

    return {
      resultForecast,
      currentPage,
      isCelsiusSelected,
      selectedLang,
      getFiveDaysForecast,
      resultFiveDays,
    }
  },
  mounted() {
    this.getFiveDaysForecast();
  }
}
</script>

<style>
.fivedays {
  text-align: center;
}

.forecast__fivedays {
  margin-top: 90px;
}

.fivedays__day {
  display: flex;
  align-items: center;
}

.fivedays__day > img {
  width: 100%;
  max-width: 40px;
  margin-right: 45px;
}

.day__date {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-right: 33px;
  text-transform: capitalize;
}

.day__maxmin {
  display: flex;
  align-items: center;
  gap: 20px;
}

.day__maxmin--temp {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.day__maxmin--gradient {
  display: block;
  background: linear-gradient(90deg, #B5C69B 40.87%, rgba(224, 151, 42, 0.53) 87.23%);
  width: 176px;
  height: 4px;
}

.day__description {
  margin-left: 39px;
  line-height: 20px;
}
</style>