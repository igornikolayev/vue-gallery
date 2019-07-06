    <template>
  <div class="container">
    <section class="films section">
      <div class="section__header">
        <h1 class="section__header-text">Select films for your gallery</h1>
      </div>
      <div class="films__container">
        <div class="films__item" v-for="(filmItem, filmId) in $store.state.films.img" :key="filmId">
          <img class="films__image" :src="filmItem" />
          <div class="films__right">
            <h3 class="films__name">
              {{
              $store.state.films.name[filmId]
              }}
            </h3>
            <p class="films__description">
              {{
              $store.state.films.plot[filmId]
              }}
            </p>
            <p class="films__rating">
              Rating IMDB:
              <strong>
                {{
                $store.state.films.rating[filmId]
                }}
              </strong>
            </p>
            <button class="films__select" @click="selectedFilm(filmId)">Add to gallery</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // links of films
      filmLinks: [
        "http://www.omdbapi.com/?i=tt3896198&apikey=f70c134f",
        "http://www.omdbapi.com/?t=green+mile&apikey=f70c134f",
        "http://www.omdbapi.com/?t=kill+bill&apikey=f70c134f",
        "http://www.omdbapi.com/?t=The+Shawshank+Redemption+&apikey=f70c134f",
        "http://www.omdbapi.com/?t=The+Dark+Knight&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Schindler's+List&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Pulp+Fiction&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Fight+Club&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Inception+&apikey=f70c134f",
        "http://www.omdbapi.com/?t=One+Flew+Over+the+Cuckoo's+Nest&apikey=f70c134f",
        "http://www.omdbapi.com/?t=The+Silence+of+the+Lambs&apikey=f70c134f",
        "http://www.omdbapi.com/?t=The+Matrix&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Back+to+the+Future&apikey=f70c134f",
        "http://www.omdbapi.com/?t=interstelar&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Gladiator&apikey=f70c134f",
        "http://www.omdbapi.com/?t=The+Departed&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Whiplash&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Django+Unchained&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Requiem+for+a+Dream&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Eternal+Sunshine+of+the+Spotless+Mind&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Inglourious+Basterds&apikey=f70c134f",
        "http://www.omdbapi.com/?t=The+Wolf+of+Wall+Street&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Gone+Girl+&apikey=f70c134f",
        "http://www.omdbapi.com/?t=The+Truman+Show&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Groundhog+Day&apikey=f70c134f",
        "http://www.omdbapi.com/?t=Pirates+of+the+Caribbean%3A+The+Curse+of+the+Black+Pearl&apikey=f70c134f"
      ]
    };
  },
  methods: {
    //http get method
    getFilm(index) {
      let filmsInformation;
      let getFilmRequest = new XMLHttpRequest();
      getFilmRequest.open("GET", this.filmLinks[index], false);

      getFilmRequest.onload = () => {
        if (getFilmRequest.readyState != 4) return;
        if (getFilmRequest.status != 200) {
          alert(getFilmRequest.status + ": " + getFilmRequest.statusText);
        } else {
          filmsInformation = JSON.parse(getFilmRequest.responseText);
          this.$store.commit("generateFilm", filmsInformation);
        }
      };
      getFilmRequest.send(null);
    },

    //select film for gallery
    selectedFilm(filmId) {
      let filmsContainer = document.getElementsByClassName("films__item");
      let sectionHeader = document.querySelector(".section__header-text");
      if (!this.$store.state.selectIndex.includes(filmId)) {
        this.$store.commit("selectFilm", filmId);
        filmsContainer[filmId].style.display = "none";
        if (this.$store.state.selectIndex.length == this.filmLinks.length) {
          sectionHeader.innerText = "You have put all films to your galery";
        }
      }
    }
  },

  beforeMount() {
    //create full list of films

    for (let index = 0; index < this.filmLinks.length; index++) {
      this.getFilm(index);
    }
  }
};
</script>

<style lang="sass">
@import "../assets/styles/list.sass"
</style>
