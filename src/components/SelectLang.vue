<template>
  <div class="lang__container">
    <div class="lang__options">
      <label for="pt-br"><img src="../assets/img/brasil.png" alt="Bandeira do Brasil"></label>
      <input type="radio" name="lang" id="pt-br" value="Português" v-model="selectedLang">
  
      <label for="en-us"><img src="../assets/img/estados-unidos.png" alt="Bandeira dos Estados Unidos"></label>
      <input type="radio" name="lang" id="en-us" value="English" v-model="selectedLang">
  
      <label for="es"><img src="../assets/img/spain.png" alt="Bandeira da Espanha"></label>
      <input type="radio" name="lang" id="es" value="Español" v-model="selectedLang">
    </div>

    <span>{{langTexts[selectedLang]}}: {{selectedLang}}</span>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '@/stores/weather';
export default {
  setup() {
    const weatherStore = useWeatherStore();
    const { selectedLang } = storeToRefs(weatherStore);

    return {
      selectedLang,
    }
  },
  data() {
    return {
      langTexts: {"Português": "Idioma selecionado", "English": "Selected language", "Español": "Idioma seleccionado" }
    }
  }
}
</script>

<style>
.lang__container {
  position: absolute;
  bottom: 15px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.05em;
}

.lang__options {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 3px;
}

.lang__options > input {
  display: none;
}

.lang__options > label {
  display: block;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 767px) {
  .lang__container {
    bottom: 20px;
  }
}
</style>