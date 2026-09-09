<template>
  <q-page padding class="flex flex-center">
    <div class="text-center">
      <h4 class="text-h4 text-primary q-mb-md">Bienvenido a Comidas Rápidas</h4>
      <p class="text-subtitle1 q-mb-xl">Seleccione una de nuestras categorías para ver el menú.</p>

      <div class="row q-col-gutter-lg justify-center" style="max-width: 900px; margin: 0 auto;">
        
        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/hamburguesas" style="text-decoration: none;">
            <q-card class="cursor-pointer q-hoverable" v-ripple>
              <q-img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1172&auto=format&fit=crop" height="150px">
                <div class="absolute-bottom text-h6 text-center">
                  Hamburguesas
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/perros" style="text-decoration: none;">
            <q-card class="cursor-pointer q-hoverable" v-ripple>
              <q-img src="https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=1170&auto=format&fit=crop" height="150px">
                <div class="absolute-bottom text-h6 text-center">
                  Perros
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/pizzas" style="text-decoration: none;">
            <q-card class="cursor-pointer q-hoverable" v-ripple>
              <q-img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop" height="150px">
                <div class="absolute-bottom text-h6 text-center">
                  Pizzas
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/bebidas" style="text-decoration: none;">
            <q-card class="cursor-pointer q-hoverable" v-ripple>
              <q-img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1170&auto=format&fit=crop" height="150px">
                <div class="absolute-bottom text-h6 text-center">
                  Bebidas
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/postres" style="text-decoration: none;">
            <q-card class="cursor-pointer q-hoverable" v-ripple>
              <q-img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1170&auto=format&fit=crop" height="150px">
                <div class="absolute-bottom text-h6 text-center">
                  Postres
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/promociones" style="text-decoration: none;">
            <q-card class="cursor-pointer q-hoverable" v-ripple>
              <q-img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1170&auto=format&fit=crop" height="150px">
                <div class="absolute-bottom text-h6 text-center">
                  Promociones
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/nosotros" style="text-decoration: none;">
            <q-card class="cursor-pointer q-hoverable" v-ripple>
              <q-img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop" height="150px">
                <div class="absolute-bottom text-h6 text-center">
                  Nosotros
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
</script>
