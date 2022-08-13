# ⛅ Weather Project

🌞 <em>Como está o tempo hoje? </em>

## 🗂 Índice

* [Sobre o projeto](#book-sobre-o-projeto)
  * [Principais tecnologias](#computer-principais-tecnologias)
  * [Requisitos](#dart-requisitos)
  * [Extras](#zap-extras)
* [Instalação](#bricks-instalação)
  * [Pré-requisitos](#construction-pré-requisitos)
  * [Front-end](#sparkles-front-end)
    * [Instalando dependências](#construction-instalando-dependências)
    * [Iniciando o front-end](#arrow_forward-iniciando-o-front-end)
* [Autor](#man_technologist-autor)

## :book: Sobre o projeto

#### 🔗 Confira em: https://weather-project-gcb.vercel.app/

<table>
  <tr>
    <td>Tela inicial</td>
    <td>Autocomplete</td>
  </tr>
  <tr>
    <td>
      <a href="https://weather-project-gcb.vercel.app/" target="_blank">
        <img width="500" alt="Tela inicial" src="https://raw.githubusercontent.com/gc-barros/weather-project/master/src/assets/img/screenshots/0100.png?token=GHSAT0AAAAAABXS6YLLWSNV2TMWJQUICLMGYXW6UDQ">
      </a>
    </td>
    <td>
      <a href="https://weather-project-gcb.vercel.app/" target="_blank">
        <img width="500" alt="Lista de tarefas" src="https://raw.githubusercontent.com/gc-barros/weather-project/master/src/assets/img/screenshots/0101.png?token=GHSAT0AAAAAABXS6YLLOEHVD33XVBYZH4QEYXW6UNQ">
      </a>
    </td>
  </tr>
  <tr>
    <td>Clima hoje</td>
    <td>Próximos 5 dias</td>
  </tr>
  <tr>
    <td>
      <a href="https://weather-project-gcb.vercel.app/" target="_blank">
        <img width="500" alt="Tela inicial" src="https://raw.githubusercontent.com/gc-barros/weather-project/master/src/assets/img/screenshots/0102.png?token=GHSAT0AAAAAABXS6YLKS4ONKOVYJTTFBUMWYXW6UUQ">
      </a>
    </td>
    <td>
      <a href="https://weather-project-gcb.vercel.app/" target="_blank">
        <img width="500" alt="Lista de tarefas" src="https://raw.githubusercontent.com/gc-barros/weather-project/master/src/assets/img/screenshots/0103.png?token=GHSAT0AAAAAABXS6YLLCGLNSPAOAIQWTONKYXW6U4Q">
      </a>
    </td>
  </tr>
 </table>

### :computer: Principais tecnologias:

* [Vue.js](https://vuejs.org/)
* [Pinia](https://pinia.vuejs.org/)
* [Open Weather](https://openweathermap.org/)
* [Google Places API](https://developers.google.com/maps/documentation/javascript/places-autocomplete)

### :dart: Requisitos:

- [x] Identificar o clima da cidade pesquisada através do Open Weather.
- [x] Utilizar a API do Google Places para carregar o select com os lugares.
- [x] Os dados deverão ser printados na tela de acordo com o que vem da API.
- [x] Ao clicar na seta de voltar (na tela com mais informações do clima) o usuário deverá voltar para o estado inicial da aplicação, com a possibilidade de buscar uma nova cidade.
- [x] A interface deve ser criada com HTML e CSS e deve seguir fielmente o layout. Ajustes de responsividade devem ser feitos para tamanhos de tela diferentes.
- [x] A programação da aplicação deve ser feita com a linguagem/framework de sua escolha, preferencialmente do universo Javascript e devem estar de acordo com as regras e funcionalidades apresentadas.

### :zap: Extras:

- [x] Tratamento de erros.
- [x] Tratar internacionalização para inglês/espanhol.
- [x] Tratar escolha de escala de grau: Celsius ou Fahrenheit.
- [x] Previsão do tempo para os próximos 5 dias.
- [ ] Testes unitários.
- [ ] Busca do clima através de geolocalização.

## :bricks: Instalação

### :construction: Pré-requisitos

Clone este repositório:
```bash
$ git clone https://github.com/gc-barros/weather-project.git
```

Entre na pasta `weather-project`
```bash
$ cd weather-project
```

🚨 Se você não possui o git na sua máquina, instale-o [aqui](https://git-scm.com/downloads).

## :sparkles: Front-end

### :construction: Instalando dependências

Na pasta `weather-project`, instale as dependências utilizando o seguinte comando:

```bash
$ npm install
```

### :arrow_forward: Iniciando o front-end

Inicie o servidor de desenvolvimento para visualizar a aplicação:

```bash
npm run serve
```

Abra [http://localhost:8080](http://localhost:8080) com o seu navegador para ver o resultado.

## :man_technologist: Autor

<table>
  <tr>
    <td align="center">
      <a href="https://www.barrosdev.com.br/" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/87779356?v=4" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Gabriel Barros</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

