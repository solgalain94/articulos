<template>
  <article class="article-item" id="article-template">
    <div class="image-wrap">
      <img :src="pelicula.image" :alt="pelicula.title" />
    </div>

    <h2>{{ pelicula.title }}</h2>
    <span
      class="date"
      :class="{
        yeargreen: pelicula.year >= 2017,
        yearred: pelicula.year < 2017,
      }"
    >
      {{ pelicula.year }}
    </span>
    <a href="#">Leer más</a>

    <input
      type="button"
      value="Marcar como favorita"
      @click="pasarFavoritaAlPadre(pelicula)"
    />

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "PeliculaComponent",
  props: ["pelicula"],
  mounted() {
    console.log(this.pelicula);
  },
  methods: {
    pasarFavoritaAlPadre(pelicula) {
      this.$emit('favorita', pelicula)
    },
  },
};
</script>
