<template>
  <section class="home">
    <h1 class="home__title">Como está o tempo hoje?</h1>
    <input class="home__input" type="text" placeholder="Digite o nome da cidade">
  </section>
</template>

<script>
export default {

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
  max-width: 710px;
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