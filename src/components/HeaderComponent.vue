<template>
         <header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>Vue
                    </span>
                </div>
                
                <!-- MENU -->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link active-class="active" to="/home">Inicio</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="/blog">Blog</router-link>
                        </li>
                        <li>
                            <router-link  active-class="active" to="formulario">Formulario</router-link>
                        </li>
                        <li>
                            <router-link active-class="active" :to="{name:'pagina', params: {id:'Soy el parametro'} }">Pagina </router-link>
                        </li>
                        <li>
                            <router-link active-class="active" to="mi-componente">Pagina 2</router-link>
                        </li>                            
                    </ul>
                </nav>

                <!--LIMPIAR FLOTADOS-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>