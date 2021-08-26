<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Editar articulo</h1>
        <form class="mid-form" @submit.prevent="edit()">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="article.title" />
            <div v-if="submitted && !$v.article.title.required">
              Ingrese un título
            </div>
          </div>
          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" v-model="article.content"> </textarea>
            <div v-if="submitted && !$v.article.content.required">
              Ingrese contenido
            </div>
          </div>
          <div class="form-group"  v-if="isEdit && article.image">
            <img
              :src="url+'get-image/'+article.image"
              :alt="article.title"
              class="image-small"
            />
          </div>
          <div class="form-group">
            <label for="image">Imagen</label>
            <input
              type="file"
              id="file"
              ref="file"
              name="file0"
              @change="fileChange()"
            />
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Guardar" class="btn btn-success" />
        </form>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import SidebarComponent from "./SidebarComponent.vue";
import axios from "axios";
import Global from "../Global";
import Article from "../models/article";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      url: Global.url,
      file: "",
      article: new Article("", "", null, ""),
      submitted: false,
      isEdit: true
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
    console.log(this.article);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    getArticle(articleId){
            axios.get(this.url + '/article/' + articleId).then( res =>{
                if (res.data.status === 'success'){
                    this.article = res.data.article;
                }
            });
    },
    edit() {
      this.submitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
          .then((res) => {
            if (res.data.status === "success") {
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);

                var articleId = res.data.article._id;

                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((response) => {
                    if (response.data.article) {
                      this.article = response.data.article;
                      this.$router.push("/blog");
                      swal(
                        "Articulo creado",
                        "El articulo se ha creado correctamente",
                        "success"
                      );
                    } else {
                      //Mostrar alerta
                       swal(
                        "Creación fallida",
                        "El articulo no se ha creado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                this.article = res.data.article;
                this.$router.push("/blog");
                swal(
                  "Articulo creado",
                  "El articulo se ha creado correctamente",
                  "success"
                );
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>