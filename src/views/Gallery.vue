<template>
  <div class="container">
    <section class="gallery section">
      <header class="section__header">
        <div class="sort">
          <button class="sort__button" @click="sortByName()">sort by name</button>
        </div>
        <h1>Your gallery</h1>
      </header>
      {{getSelectedFilms}}
      <div class="films__container">
        <div
          class="films__item"
          v-for="(filmItem, filmId) in galleryFilms.galleryFilmsImage"
          :key="filmId"
        >
          <img class="films__image" :src="filmItem" />
          <div class="films__right">
            <h3 class="films__name">
              {{
              galleryFilms.galleryFilmsName[filmId]
              }}
            </h3>
            <p class="films__description">
              {{
              galleryFilms.galleryFilmsPlot[filmId]
              }}
            </p>
            <p class="films__rating">
              Rating IMDB:
              <strong>
                {{
                galleryFilms.galleryFilmsRating[filmId]
                }}
              </strong>
            </p>
            <button class="films__select" @click="deleteFilm(filmId)">Delete</button>
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
      galleryFilms: {
        galleryFilmsName: [],
        galleryFilmsPlot: [],
        galleryFilmsImage: [],
        galleryFilmsRating: []
      }
    };
  },
  methods: {
    deleteFilm(id) {
      this.galleryFilms.galleryFilmsName.splice(id, 1);
      this.galleryFilms.galleryFilmsPlot.splice(id, 1);
      this.galleryFilms.galleryFilmsImage.splice(id, 1);
      this.galleryFilms.galleryFilmsRating.splice(id, 1);
    },

    sortByName() {
      this.galleryFilms.galleryFilmsName.sort(function(a, b) {
        return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
      });
    }
  },
  computed: {
    // eslint-disable-next-line
    getSelectedFilms() {
      for (
        let index = 0;
        index < this.$store.state.selectIndex.length;
        index++
      ) {
        // eslint-disable-next-line
        this.galleryFilms.galleryFilmsName.push(
          this.$store.state.films.name[this.$store.state.selectIndex[index]]
        );
        // eslint-disable-next-line
        this.galleryFilms.galleryFilmsPlot.push(
          this.$store.state.films.plot[this.$store.state.selectIndex[index]]
        );
        // eslint-disable-next-line
        this.galleryFilms.galleryFilmsImage.push(
          this.$store.state.films.img[this.$store.state.selectIndex[index]]
        );
        // eslint-disable-next-line
        this.galleryFilms.galleryFilmsRating.push(
          this.$store.state.films.rating[this.$store.state.selectIndex[index]]
        );
        // eslint-disable-next-line
        this.$store.state.selectIndex.splice(index, 1);
      }
    }
  }
};
</script>

<style>
</style>
