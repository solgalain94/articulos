<template>
<section id="articles-component">
  <div id="articles-list" v-if="articles && articles.length >=1">
    <article class="article-item" v-for="article in articles" :key="article.id">
      <div class="image-wrap">
        <img
          :src="url + 'get-image/' + article.image"
          :alt="article.title"
          v-if="article.image"
        />
        <img src="../assets/images/default.png" :alt="article.title" v-else />
      </div>
      <router-link :to="{name:'article', params: {id: article._id}}">
        <h2>{{ article.title }}</h2>
      </router-link>
      <span class="date"> {{ article.date | moment("from", "now") }} </span>
      <a href="#">Leer más</a>

      <div class="clearfix"></div>
    </article>
  </div>
  <div v-else-if="articles && articles.length <=1">
   No hay artículos para mostrar.
  </div>
  <div v-else>
   Cargando...
  </div>
</section>
</template>

<script>
import Global from "../Global"
export default {
  name: "Articles",
  props: ["articles"],
  data(){
      return {
          url: Global.url
      }
  }
};
</script>

<style>
</style>