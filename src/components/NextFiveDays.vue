<template>
  <section class="fivedays">
    <h1 class="forecast__city">{{resultForecast.name}}</h1>
    <h2 class="forecast__description">Previsão para 5 dias</h2>

    <ul class="forecast__fivedays">
      <li class="fivedays__day" v-for="day in fiveDaysList" :key="day.dt">
        <span class="day__date">{{
          new Date(day.dt_txt).toLocaleDateString(langCodes[selectedLang], {weekday: 'short', month: 'short', day: 'numeric'}).replaceAll(".","").replace("de", "")
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
    const { resultForecast, currentPage, isCelsiusSelected, selectedLang } = storeToRefs(weatherStore);
    const { getFiveDaysForecast } = weatherStore;

    return {
      resultForecast,
      currentPage,
      isCelsiusSelected,
      selectedLang,
      getFiveDaysForecast,
    }
  },
  data() {
    return {
      fiveDaysList: [],
      langCodes: {"Português": "pt-BR", "Inglês": "en", "Espanhol": "es"}
    }
  },
  methods: {
    async handleGetFiveDays() {
      this.fiveDaysList = await this.getFiveDaysForecast();
    }
  },
  watch: {
    isCelsiusSelected() {
      this.handleGetFiveDays()
    },
    selectedLang() {
      this.handleGetFiveDays()
    }
  },
  mounted() {
    this.handleGetFiveDays()
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
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 134px 40px 264px auto;
  text-align: left;
  gap: 40px;
  align-items: center;
  justify-content: left;
}

.fivedays__day > img {
  width: 100%;
  max-width: 40px;
}

.day__date {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  text-align: left;
  white-space: nowrap;
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
  line-height: 20px;
  white-space: nowrap;
}

@media screen and (max-width: 767px) {
  .day__description {
    display: none;
  }

  .forecast__fivedays {
    margin-top: 15px;
  }

  .fivedays__day {
    grid-template-columns: 80px 20px 160px;
    gap: 10px;
  }

  .day__maxmin--temp, .day__date {
    font-size: 12px;
  }

  .fivedays__day > img {
    max-width: 20px;
  }

  .day__maxmin--gradient {
    width: 97px;
  }

  .day__maxmin {
    gap: 10px;
  }

}
</style>