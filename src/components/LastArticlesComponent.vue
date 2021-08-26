<template>
  <div class="general">
    <SliderComponent
      texto="Bienvenido al Curso de Vue con Víctor Robles de victorroblesweb.es"
      :home="true"
    ></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
           <Articles :articles="articles"></Articles>
        </div>
      </section>

      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import SidebarComponent from "./SidebarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
import axios from 'axios'
import Articles from "./Articles"
import Global from "../Global";

export default {
  name: "LastArticlesComponent",
  components: {
    SidebarComponent,
    SliderComponent,
    Articles
  },
  data() {
    return {
      articles: null,
      url: Global.url
    };
  },
  mounted() {
   this.getLastArticles();
    
  },
  methods: {
    getLastArticles() {
      axios.get(this.url+"articles/5").then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>