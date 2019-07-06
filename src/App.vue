<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png"
            alt="logo-imdb"
          />
        </div>
        <nav class="navigation">
          <router-link class="navigation__item" to="/">Choose your films</router-link>
          <router-link class="navigation__item" to="/gallery">Gallery</router-link>
        </nav>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>



<style lang="scss">
@import "./assets/styles/basic.sass";
</style>
