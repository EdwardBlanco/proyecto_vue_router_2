<template>
  <q-layout view="hHh lpR fff">

    <!-- HEADER -->
    <q-header elevated class="bg-white text-dark">

      <!-- Top Bar -->
      <div class="bg-dark text-white top-bar q-py-xs hidden-xs">
        <div class="row justify-between items-center q-px-lg max-width-container">
          <div class="row items-center q-gutter-x-md">
            <div><q-icon name="phone" size="sm" class="q-mr-xs text-primary" /> +57 321 4567890</div>
            <div><q-icon name="email" size="sm" class="q-mr-xs text-primary" /> info@crazyfood.com</div>
          </div>
          <div class="row items-center q-gutter-x-md">
            <div><q-icon name="local_shipping" size="sm" class="q-mr-xs text-primary" /> Envío gratis en pedidos sobre
              $50.000</div>
            <div class="row q-gutter-x-sm">
              <q-btn flat round dense size="sm" icon="fab fa-facebook" />
              <q-btn flat round dense size="sm" icon="fab fa-instagram" />
              <q-btn flat round dense size="sm" icon="fab fa-twitter" />
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <q-toolbar class="q-px-lg q-py-sm shadow-1">
        <!-- Mobile Menu Button -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="lt-md" />

        <!-- Logo -->
        <q-toolbar-title class="shrink">
          <router-link to="/" style="text-decoration: none; color: inherit;" class="row items-center">
            <q-avatar size="42px" class="q-mr-sm text-primary">
              <q-icon name="lunch_dining" size="42px" />
            </q-avatar>
            <span class="font-oswald text-weight-bold text-h5">CRAZY<span class="text-primary">FOOD</span></span>
          </router-link>
        </q-toolbar-title>

        <q-space />

        <!-- Desktop Menu -->
        <div class="gt-sm row items-center q-gutter-x-md font-oswald text-weight-medium">
          <q-btn flat no-caps label="Inicio" to="/" class="nav-link" exact />
          <q-btn flat no-caps label="Hamburguesas" to="/hamburguesas" class="nav-link" />
          <q-btn flat no-caps label="Pizzas" to="/pizzas" class="nav-link" />
          <q-btn flat no-caps label="Perros" to="/perros" class="nav-link" />
          <q-btn flat no-caps label="Bebidas" to="/bebidas" class="nav-link" />
          <q-btn flat no-caps label="Postres" to="/postres" class="nav-link" />
          <q-btn flat no-caps label="Promociones" to="/promociones" class="nav-link" />
          <q-btn flat no-caps label="Nosotros" to="/nosotros" class="nav-link" />
        </div>

        <q-space class="gt-sm" />


      </q-toolbar>
    </q-header>

    <!-- MOBILE DRAWER -->
    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered class="bg-dark text-white">
      <div class="q-pa-md text-center bg-dark">
        <q-avatar size="64px" class="q-mb-sm text-primary">
          <q-icon name="lunch_dining" size="64px" />
        </q-avatar>
        <div class="font-oswald text-weight-bold text-h6">CRAZY<span class="text-primary">FOOD</span></div>
      </div>

      <q-list padding class="text-white font-oswald text-weight-medium">
        <q-item clickable v-ripple to="/" exact active-class="text-primary">
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/hamburguesas" active-class="text-primary">
          <q-item-section avatar><q-icon name="lunch_dining" /></q-item-section>
          <q-item-section>Hamburguesas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/pizzas" active-class="text-primary">
          <q-item-section avatar><q-icon name="local_pizza" /></q-item-section>
          <q-item-section>Pizzas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/perros" active-class="text-primary">
          <q-item-section avatar><q-icon name="fastfood" /></q-item-section>
          <q-item-section>Perros</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/bebidas" active-class="text-primary">
          <q-item-section avatar><q-icon name="local_drink" /></q-item-section>
          <q-item-section>Bebidas</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/postres" active-class="text-primary">
          <q-item-section avatar><q-icon name="icecream" /></q-item-section>
          <q-item-section>Postres</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/promociones" active-class="text-primary">
          <q-item-section avatar><q-icon name="local_offer" /></q-item-section>
          <q-item-section>Promociones</q-item-section>
        </q-item>
        <q-separator spaced dark />
        <q-item clickable v-ripple to="/nosotros" active-class="text-primary">
          <q-item-section avatar><q-icon name="info" /></q-item-section>
          <q-item-section>Nosotros</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- Page Content -->
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <q-footer class="bg-dark text-white q-mt-xl">

      <!-- Main Footer Content -->
      <div class="q-pa-xl max-width-container">
        <div class="row q-col-gutter-xl">
          <!-- About -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="row items-center q-mb-md justify-start">
              <q-avatar size="40px" class="q-mr-sm text-primary">
                <q-icon name="lunch_dining" size="40px" />
              </q-avatar>
              <span class="font-oswald text-weight-bold text-h6">CRAZY<span class="text-primary">FOOD</span></span>
            </div>
            <p class="text-grey-5 q-mb-md">Las mejores hamburguesas y pizzas de la ciudad, hechas con ingredientes
              frescos y 100% amor.</p>
            <div class="row q-gutter-sm">
              <q-btn round flat dense color="grey-5" icon="fab fa-facebook" />
              <q-btn round flat dense color="grey-5" icon="fab fa-instagram" />
              <q-btn round flat dense color="grey-5" icon="fab fa-twitter" />
            </div>
          </div>

          <!-- Products -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="footer-heading">PRODUCTOS</div>
            <router-link to="/hamburguesas" class="footer-link">Hamburguesas</router-link>
            <router-link to="/pizzas" class="footer-link">Pizzas</router-link>
            <router-link to="/perros" class="footer-link">Perros Calientes</router-link>
            <router-link to="/bebidas" class="footer-link">Bebidas & Postres</router-link>
          </div>

          <!-- Quick Links -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="footer-heading">ENLACES RÁPIDOS</div>
            <router-link to="/nosotros" class="footer-link">Sobre Nosotros</router-link>
            <router-link to="/promociones" class="footer-link">Promociones</router-link>
            <a href="#" class="footer-link">Contacto</a>
            <a href="#" class="footer-link">Política de Privacidad</a>
          </div>

          <!-- Opening Hours -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="footer-heading">HORARIO</div>
            <div class="row justify-between text-grey-5 q-mb-sm">
              <span>Lunes - Viernes:</span>
              <span>08:00am - 10:00pm</span>
            </div>
            <div class="row justify-between text-grey-5 q-mb-sm">
              <span>Sábado:</span>
              <span>09:00am - 11:30pm</span>
            </div>
            <div class="row justify-between text-primary text-weight-bold q-mb-sm">
              <span>Domingo:</span>
              <span>Cerrado</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center q-pa-md border-top bg-dark-page text-grey-6 font-oswald letter-spacing-1">
        &copy; {{ new Date().getFullYear() }} <span class="text-primary">CRAZYFOOD</span>. Todos los derechos
        reservados.
      </div>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { setCssVar } from 'quasar'

setCssVar('primary', '#ff5722')
setCssVar('dark', '#121212')
setCssVar('dark-page', '#1e1e1e')

const leftDrawerOpen = ref(false)
const email = ref('')

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
.max-width-container {
  max-width: 1200px;
  margin: 0 auto;
}

.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.bg-dark-page {
  background-color: #0f0f0f;
}

.letter-spacing-1 {
  letter-spacing: 1px;
}
</style>