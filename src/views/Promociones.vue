<template>
  <q-page>
    <q-img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1170&auto=format&fit=crop"
      height="350px" fit="cover" position="center">
      <div class="absolute-full bg-black" style="opacity: 0.6;"></div>
      <div class="absolute-center bg-transparent text-center text-white text-shadow full-width q-px-md">
        <h1 class="text-h2 text-weight-bolder q-mb-sm q-mt-none">Promociones</h1>
        <p class="text-h6 text-weight-light text-grey-3" style="max-width: 600px; margin: 0 auto;">
          Disfruta de nuestros mejores combos y ofertas especiales pensados para ti.
        </p>
      </div>
    </q-img>

    <div class="q-pa-lg">
      <div class="row q-col-gutter-xl justify-center">
        <div v-for="p in productos" :key="p.id" class="col-12 col-sm-6 col-md-4 col-lg-3 flex">
          <q-card class="my-card column full-width" :class="{ 'chef-recommendation': p.recomienda }" flat bordered>
            <div v-if="p.recomienda" class="ribbon-wrapper">
              <div class="ribbon bg-orange-9 text-white text-weight-bold shadow-2">
                <q-icon name="star" size="xs" class="q-mr-xs" /> CHEF
              </div>
            </div>

            <q-img :src="p.imagen" height="220px" fit="cover">
              <template v-if="p.etiqueta">
                <div class="absolute-top-right bg-transparent">
                  <q-chip color="red-14" text-color="white" class="text-weight-bold shadow-2 q-mt-sm q-mr-sm">
                    {{ p.etiqueta }}
                  </q-chip>
                </div>
              </template>
            </q-img>

            <q-card-section class="col-grow q-pt-md">
              <div class="row items-center justify-between q-mb-xs">
                <div class="text-h5 text-weight-bold">{{ p.titulo }}</div>
              </div>

              <div class="text-body2 text-grey-7 q-mt-sm">
                {{ p.descripcion }}
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="between" class="q-pa-md bg-grey-1 items-center">
              <div class="text-h5 text-weight-bolder text-primary">
                {{ formatPrice(p.precio) }}
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const productos = ref([
  {
    id: '1',
    imagen: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=687&auto=format&fit=crop',
    titulo: 'Combo Pareja',
    descripcion: "2 Hamburguesas Clásicas + 2 Papas a la Francesa medianas + 2 Gaseosas.",
    precio: 45000,
    etiqueta: "20% OFF"
  },
  {
    id: '2',
    imagen: 'https://plus.unsplash.com/premium_photo-1661626833959-e051eff9d551?q=80&w=687&auto=format&fit=crop',
    titulo: 'Combo Amigos',
    descripcion: "1 Pizza Familiar Carnívora + 1 Porción de alitas BBQ (8 uds) + Gaseosa 1.5L.",
    precio: 65000,
    etiqueta: "Más pedido"
  },
  {
    id: '3',
    imagen: 'https://images.unsplash.com/photo-1667017935950-934dedbd2642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGFyZGUlMjBkZSUyMFBvc3RyZXN8ZW58MHx8MHx8fDA%3D',
    titulo: 'Tarde de Postres',
    descripcion: "2 Cheesecake de Fresa + 2 Malteadas de Oreo. Ideal para compartir.",
    precio: 35000,
    etiqueta: "Nuevo"
  },
  {
    id: '4',
    imagen: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhhbWJ1cmd1ZXNhcyUyQyUyMFBlcnJvcyUyME1vbnN0ZXIlMjBQYXBhcyUyMGdyYW5kZXN8ZW58MHx8MHx8fDA%3D',
    titulo: 'Banquete del Chef',
    descripcion: "2 Hamburguesas La Maestra + 2 Perros Monster + Papas grandes + Gaseosa 2L.",
    precio: 95000,
    recomienda: true
  }
])

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(value)
}
</script>

<style scoped>
.my-card {
  border-radius: 16px;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.my-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.chef-recommendation {
  border: 2px solid #f57c00;
  box-shadow: 0 4px 20px rgba(245, 124, 0, 0.15);
}

.ribbon-wrapper {
  position: absolute;
  top: -6px;
  left: -6px;
  z-index: 10;
  overflow: hidden;
  width: 100px;
  height: 100px;
}

.ribbon {
  position: absolute;
  top: 20px;
  left: -25px;
  width: 130px;
  text-align: center;
  transform: rotate(-45deg);
  padding: 4px 0;
  font-size: 11px;
  letter-spacing: 1px;
}

.text-shadow {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}
</style>
