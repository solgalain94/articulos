import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import moment from 'moment'
import LastArticlesComponent from './components/LastArticlesComponent.vue'
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'
import BlogComponent from './components/BlogComponent.vue'
import PaginaComponent from './components/PaginaComponent.vue'
import FormularioComponent from './components/FormularioComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import PeliculasComponent from './components/PeliculasComponent.vue'
import Search from './components/Search.vue'
import Vuelidate from 'vuelidate'
import Redirect from './components/Redirect.vue'
import Article from './components/Article.vue'
import CreateArticle from './components/CreateArticle.vue'
import EditArticle from './components/EditArticle.vue'
import EliminarArticle from './components/EliminarArticle.vue'

Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.use(VueRouter);


require('moment/locale/es');

Vue.use(VueMoment, {
  moment
});

const routes = [
  { path: '/home', component: LastArticlesComponent  },
  { path: '/ultimos-articulos', component: LastArticlesComponent  },
  { path: '/mi-componente', component: MiComponente  },
  { path: '/hello-world', component: HelloWorld  },
  { path: '/blog', component: BlogComponent  },
  { path: '/buscador/:searchString', component: Search  },
  { path: '/redirect/:searchString', component: Redirect  },
  { path: '/peliculas', name:'peliculas', component: PeliculasComponent  },
  { path: '/create-articulo', name:'create', component: CreateArticle  },
  { path: '/editar/:id', name:'edit', component: EditArticle  },
  { path: '/eliminar/:id', name:'eliminar', component: EliminarArticle  },
  { path: '/pagina/:id?', name:'pagina', component: PaginaComponent  },
  { path: '/formulario', component: FormularioComponent  },
  { path: '/*', component: ErrorComponent  },
  { path: '/articulo/:id', name:'article', component: Article  }
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
