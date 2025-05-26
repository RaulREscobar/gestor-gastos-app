<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Gestor de Gastos</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item to="/" label="Inicio" clickable />
        <q-item to="/gastos" label="Gastos" clickable />
        <q-item to="/reportes" label="Reportes" clickable />
        <q-item to="/perfil" label="Perfil" clickable />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const leftDrawerOpen = ref(true)
</script>
