<template>
  <q-page>
    <!-- Hero Section -->
    <div class="hero-section text-center q-pa-xl bg-dark text-white relative-position">
      <div class="hero-overlay"></div>
      <div class="relative-position q-py-xl" style="z-index: 1;">
        <h1 class="text-h2 font-oswald text-weight-bold q-mb-md text-uppercase hero-title">
          Bienvenido a <span class="text-primary">CrazyFood</span>
        </h1>
        <p class="text-h6 text-weight-light q-mb-xl" style="max-width: 600px; margin: 0 auto; color: #ddd;">
          Descubre el verdadero sabor de la comida rápida premium. Selecciona una de nuestras categorías para explorar nuestro delicioso menú.
        </p>
      </div>
    </div>

    <!-- Categories Section -->
    <div class="q-pa-xl max-width-container">
      <div class="text-center q-mb-xl">
        <h2 class="text-h3 font-oswald text-weight-bold text-dark q-mb-sm">NUESTRO MENÚ</h2>
        <div class="title-separator bg-primary q-mx-auto"></div>
      </div>

      <div class="row q-col-gutter-xl justify-center">
        <!-- Hamburguesas -->
        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/hamburguesas" class="category-link">
            <q-card class="category-card cursor-pointer" flat bordered>
              <q-img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1172&auto=format&fit=crop" height="220px" class="card-img">
                <div class="absolute-bottom card-overlay row items-center justify-center">
                  <div class="text-h4 font-oswald text-weight-bold text-uppercase">Hamburguesas</div>
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <!-- Perros -->
        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/perros" class="category-link">
            <q-card class="category-card cursor-pointer" flat bordered>
              <q-img src="https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=1170&auto=format&fit=crop" height="220px" class="card-img">
                <div class="absolute-bottom card-overlay row items-center justify-center">
                  <div class="text-h4 font-oswald text-weight-bold text-uppercase">Perros</div>
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <!-- Pizzas -->
        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/pizzas" class="category-link">
            <q-card class="category-card cursor-pointer" flat bordered>
              <q-img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop" height="220px" class="card-img">
                <div class="absolute-bottom card-overlay row items-center justify-center">
                  <div class="text-h4 font-oswald text-weight-bold text-uppercase">Pizzas</div>
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <!-- Bebidas -->
        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/bebidas" class="category-link">
            <q-card class="category-card cursor-pointer" flat bordered>
              <q-img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1170&auto=format&fit=crop" height="220px" class="card-img">
                <div class="absolute-bottom card-overlay row items-center justify-center">
                  <div class="text-h4 font-oswald text-weight-bold text-uppercase">Bebidas</div>
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <!-- Postres -->
        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/postres" class="category-link">
            <q-card class="category-card cursor-pointer" flat bordered>
              <q-img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1170&auto=format&fit=crop" height="220px" class="card-img">
                <div class="absolute-bottom card-overlay row items-center justify-center">
                  <div class="text-h4 font-oswald text-weight-bold text-uppercase">Postres</div>
                </div>
              </q-img>
            </q-card>
          </router-link>
        </div>

        <!-- Promociones -->
        <div class="col-12 col-sm-6 col-md-4">
          <router-link to="/promociones" class="category-link">
            <q-card class="category-card cursor-pointer" flat bordered>
              <q-img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1170&auto=format&fit=crop" height="220px" class="card-img">
                <div class="absolute-bottom card-overlay row items-center justify-center">
                  <div class="text-h4 font-oswald text-weight-bold text-uppercase">Promociones</div>
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

<style scoped>
.hero-section {
  background-image: url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2065&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-bottom: 5px solid var(--q-primary);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.hero-title {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  letter-spacing: 2px;
}

.title-separator {
  width: 80px;
  height: 4px;
  border-radius: 2px;
}

.category-link {
  text-decoration: none;
}

.category-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
}

.category-card:hover .card-img {
  transform: scale(1.05);
}

.card-img {
  transition: transform 0.5s ease;
}

.card-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%);
  padding: 20px;
  height: 100%;
  transition: background 0.3s ease;
}

.category-card:hover .card-overlay {
  background: linear-gradient(to top, rgba(255, 87, 34, 0.9) 0%, rgba(0,0,0,0.1) 100%);
}
</style>
