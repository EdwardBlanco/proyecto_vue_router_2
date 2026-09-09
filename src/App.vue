<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
          </q-avatar>
          Comidas Rapidas
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered>
      <q-list padding class="text-primary">
        <q-item-label header class="text-weight-bold text-uppercase">Menú Principal</q-item-label>

        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/hamburguesas">
          <q-item-section avatar>
            <q-icon name="lunch_dining" />
          </q-item-section>
          <q-item-section>Hamburguesas</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/perros">
          <q-item-section avatar>
            <q-icon name="fastfood" />
          </q-item-section>
          <q-item-section>Perros</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/pizzas">
          <q-item-section avatar>
            <q-icon name="local_pizza" />
          </q-item-section>
          <q-item-section>Pizzas</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/bebidas">
          <q-item-section avatar>
            <q-icon name="local_drink" />
          </q-item-section>
          <q-item-section>Bebidas</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/postres">
          <q-item-section avatar>
            <q-icon name="icecream" />
          </q-item-section>
          <q-item-section>Postres</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/promociones">
          <q-item-section avatar>
            <q-icon name="local_offer" />
          </q-item-section>
          <q-item-section>Promociones</q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item clickable v-ripple to="/nosotros">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>Nosotros</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle1 text-center">
          &copy; {{ new Date().getFullYear() }} Comidas Rápidas. Todos los derechos reservados.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>