<template>
  <div class="general">
    <SliderComponent texto="Blog"></SliderComponent>
    <div class="center">
      <section id="content">
        <h1 class="subheader">BlogComponent</h1>
        <!--Listado articulos-->
        <div id="articles" v-if="articles">
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
import axios from "axios";
import Global from "../Global";
import Articles from "./Articles"

export default {
  name: "BlogComponent",
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
    this.getArticles();
    
  },
  methods: {
    getArticles() {
      axios.get(this.url+"articles").then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>