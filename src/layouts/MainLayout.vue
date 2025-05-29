<template>

  <q-layout view="lHh lpr lFf" style="height: 100vh" class="">
    <q-header elevated>
      <q-toolbar class="">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" size="sm" />
        <q-toolbar-title class="text-center text-body1">Mis Gastos</q-toolbar-title>
        <q-btn flat @click="drawer = !drawer" round dense icon="search" size="sm" />
        <q-btn flat @click="drawer = !drawer" round dense icon="event" size="sm" />

      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs dense class="">
        <q-route-tab to="/" exact name="Inicio" label="Inicio" icon="home" size="xs" />
        <q-route-tab to="/reportes" exact name="Grafico" label="Grafico" icon="insert_chart" size="xs" /> 
        <q-route-tab to="/gastos" exact name="Agregar" label="Agregar" icon="add_circle" size="xs" /> 
        <q-route-tab to="/perfil" exact name="Yo" label="Yo" icon="account_circle" size="xs" />
      </q-tabs>
    </q-footer>

    <q-drawer overlay v-model="drawer" side="left" bordered class="bg-dark text-white">
      <q-list>
        <q-item to="/" label="Inicio" clickable>Inicio</q-item>
        <q-item to="/gastos" label="Gastos" clickable>Gastos</q-item>
        <q-item to="/reportes" label="Reportes" clickable>Reportes</q-item>
        <q-item to="/perfil" label="Perfil" clickable>Perfil</q-item>
      </q-list>
    </q-drawer>


    <q-page-container>
      <q-page padding>
        <router-view />
         <q-btn label="Descargar App" @click="descargarApp" />
      </q-page>
    </q-page-container>
  </q-layout>

</template>

<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
//
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let deferredPrompt: any = null

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  deferredPrompt = e
})

function descargarApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt()
  }
}
</script>
