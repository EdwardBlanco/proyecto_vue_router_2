<template>
  <q-page>
    <q-img
      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop"
      height="350px"
      fit="cover"
      position="center"
    >
      <div class="absolute-full bg-black" style="opacity: 0.6;"></div>
      <div class="absolute-center bg-transparent text-center text-white text-shadow full-width q-px-md">
        <h1 class="text-h2 text-weight-bolder q-mb-sm q-mt-none">Nosotros</h1>
        <p class="text-h6 text-weight-light text-grey-3" style="max-width: 600px; margin: 0 auto;">
          Conoce nuestra historia y al equipo detrás de la magia.
        </p>
      </div>
    </q-img>

    <div class="q-pa-lg">
      <div class="row q-col-gutter-xl justify-center q-mb-xl">
        <div class="col-12 col-md-8 text-center">
          <h2 class="text-h4 text-weight-bold text-primary q-mb-md">Nuestra Historia</h2>
          <p class="text-body1 text-grey-8" style="line-height: 1.8;">
            Nacimos en 2015 como un pequeño carrito de comidas rápidas con un gran sueño: ofrecer sabores 
            auténticos con ingredientes de primera calidad. Gracias al apoyo de nuestros clientes, 
            hoy somos un restaurante reconocido en la ciudad. Nuestro secreto sigue siendo el mismo: 
            amor por la cocina, recetas originales y la frescura en cada plato que servimos.
          </p>
        </div>
      </div>

      <q-separator class="q-mb-xl" />

      <div class="row q-col-gutter-xl q-mb-xl">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="h-100 info-card">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-icon name="place" size="md" color="primary" class="q-mr-sm" />
                <div class="text-h6 text-weight-bold">Ubicación y Horarios</div>
              </div>
              <p class="text-body1 text-grey-8 q-mb-sm"><strong>Dirección:</strong> Calle 123 # 45-67, Zona Central.</p>
              <p class="text-body1 text-grey-8 q-mb-none"><strong>Lunes a Jueves:</strong> 12:00 PM - 10:00 PM</p>
              <p class="text-body1 text-grey-8 q-mb-none"><strong>Viernes a Domingo:</strong> 12:00 PM - 12:00 AM</p>
            </q-card-section>
          </q-card>
        </div>
        
        <div class="col-12 col-md-6">
          <q-card flat bordered class="h-100 info-card">
            <q-card-section>
              <div class="row items-center q-mb-md">
                <q-icon name="contact_phone" size="md" color="primary" class="q-mr-sm" />
                <div class="text-h6 text-weight-bold">Contacto y Pedidos</div>
              </div>
              <p class="text-body1 text-grey-8 q-mb-md">
                Haz tu pedido a domicilio o contáctanos para reservas. ¡Estamos listos para atenderte!
              </p>
              <q-btn 
                color="green-6" 
                icon="whatsapp" 
                label="WhatsApp: +57 300 123 4567" 
                class="full-width q-mb-sm"
                unelevated
              />
              <q-btn 
                color="primary" 
                icon="phone" 
                label="Teléfono: (601) 123 4567" 
                class="full-width"
                outline
              />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="text-center q-mb-lg">
        <h2 class="text-h4 text-weight-bold text-primary">Nuestro Equipo</h2>
        <p class="text-subtitle1 text-grey-7">Los rostros detrás de tus platos favoritos</p>
      </div>

      <div class="row q-col-gutter-lg justify-center">
        <!-- Miembro 1 -->
        <div class="col-12 col-sm-4 text-center">
          <q-avatar size="150px" class="shadow-4 q-mb-md">
            <q-img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=677&auto=format&fit=crop" />
          </q-avatar>
          <div class="text-h6 text-weight-bold">Carlos Rodríguez</div>
          <div class="text-subtitle2 text-primary">Chef Principal</div>
        </div>

        <!-- Miembro 2 -->
        <div class="col-12 col-sm-4 text-center">
          <q-avatar size="150px" class="shadow-4 q-mb-md">
            <q-img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop" />
          </q-avatar>
          <div class="text-h6 text-weight-bold">María Gómez</div>
          <div class="text-subtitle2 text-primary">Cajera y Atención</div>
        </div>

        <!-- Miembro 3 -->
        <div class="col-12 col-sm-4 text-center">
          <q-avatar size="150px" class="shadow-4 q-mb-md">
            <q-img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=687&auto=format&fit=crop" />
          </q-avatar>
          <div class="text-h6 text-weight-bold">Juan Pérez</div>
          <div class="text-subtitle2 text-primary">Domiciliario Estrella</div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
// Lógica para la vista Nosotros (sin datos reactivos por ahora)
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
}

.h-100 {
  height: 100%;
}

.info-card {
  border-radius: 16px;
  background: #fdfdfd;
}
</style>
