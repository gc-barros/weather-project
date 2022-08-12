<template>
  <div class="switch__container">
    <span class="switch__scale">°F</span>
    <input type="checkbox" id="toggle" v-model="isCelsiusSelected">
    <label for="toggle" class="switch__toggle"></label>
    <span class="switch__scale">°C</span>
  </div>
</template>

<script>
import { useWeatherStore } from '@/stores/weather';
import { storeToRefs } from 'pinia';
export default {
  setup() {
    const weatherStore = useWeatherStore();
    const { isCelsiusSelected } = storeToRefs(weatherStore);

    return {
      isCelsiusSelected
    }
  },
}
</script>

<style>
.switch__container {
  position: absolute;
  top: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.switch__container > input {
  display: none;
}

.switch__scale {
  font-size: 15px;
  color: #D9D9D9;
  line-height: 18px;
  letter-spacing: 0.05em;
  font-weight: 400;
}

.switch__toggle {
  width: 50px;
  height: 30px;
  background: rgba(28, 36, 40, 0.49);
  border-radius: 20px;
  position: relative;
  transition: 0.4s ease;
  cursor: pointer;
}

.switch__toggle::after {
  content: "";
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #D9D9D9 ;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: 0.2s ease;
}

.switch__container > input:checked ~ .switch__toggle {
  background-color: #D2B3C1;
}

.switch__container > input:checked ~ .switch__toggle::after {
  left: 25px;
}

@media screen and (max-width: 767px) {
  .switch__container {
    top: 20px;
    right: 20px;
  }

  .switch__scale {
    font-size: 12px;
  }

  .switch__toggle {
    width: 40px;
    height: 20px;
  }

  .switch__toggle::after {
    height: 14px;
    width: 14px;
    top: 3px;
  } 

  .switch__container > input:checked ~ .switch__toggle::after {
    left: 21px;
  }
}
</style>