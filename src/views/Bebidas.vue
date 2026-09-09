<template>
  <q-page>
    <q-img
      src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1170&auto=format&fit=crop"
      height="350px"
      fit="cover"
      position="center"
    >
      <div class="absolute-full bg-black" style="opacity: 0.6;"></div>
      <div class="absolute-center bg-transparent text-center text-white text-shadow full-width q-px-md">
        <h1 class="text-h2 text-weight-bolder q-mb-sm q-mt-none">Bebidas</h1>
        <p class="text-h6 text-weight-light text-grey-3" style="max-width: 600px; margin: 0 auto;">
          Refrescantes y deliciosas, el acompañamiento perfecto para tu comida.
        </p>
      </div>
    </q-img>

    <div class="q-pa-lg">
      <div class="row q-col-gutter-xl justify-center">
        <div 
          v-for="p in productos" 
          :key="p.id" 
          class="col-12 col-sm-6 col-md-4 col-lg-3 flex"
        >
          <q-card 
            class="my-card column full-width"
            :class="{ 'chef-recommendation': p.recomienda }"
            flat 
            bordered
          >
            <div v-if="p.recomienda" class="ribbon-wrapper">
              <div class="ribbon bg-orange-9 text-white text-weight-bold shadow-2">
                <q-icon name="star" size="xs" class="q-mr-xs"/> CHEF
              </div>
            </div>

            <q-img :src="p.imagen" height="220px" fit="cover">
              <template v-if="p.etiqueta">
                <div class="absolute-top-right bg-transparent">
                  <q-chip 
                    color="red-14" 
                    text-color="white" 
                    class="text-weight-bold shadow-2 q-mt-sm q-mr-sm"
                  >
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
      imagen: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=687&auto=format&fit=crop', 
      titulo: 'Gaseosas', 
      descripcion: "Coca-Cola, Sprite, Fanta. Botella 400ml o Lata 330ml.", 
      precio: 4500, 
      etiqueta: "Clásico" 
    },
    { 
      id: '2', 
      imagen: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=687&auto=format&fit=crop', 
      titulo: 'Limonada de Coco', 
      descripcion: "Limonada frappé con crema de coco, leche condensada y un toque de hierbabuena.", 
      precio: 8000, 
      etiqueta: "Más pedido" 
    },
    { 
      id: '3', 
      imagen: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=687&auto=format&fit=crop', 
      titulo: 'Jugos Naturales', 
      descripcion: "Mango, Mora, Maracuyá, Lulo, Fresa. En agua o en leche.", 
      precio: 6000, 
      etiqueta: "Natural" 
    },
    { 
      id: '4', 
      imagen: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=687&auto=format&fit=crop', 
      titulo: 'Malteada de Oreo', 
      descripcion: "Helado de vainilla batido con galletas Oreo, crema chantilly y sirope de chocolate.", 
      precio: 12000, 
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
  box-shadow: 0 12px 24px rgba(0,0,0,0.15) !important;
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
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
}
</style>
