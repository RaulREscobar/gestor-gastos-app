<template>
  <router-view />
  <q-btn label="Descargar App" @click="descargarApp" />
</template>

<script setup lang="ts">
//
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let deferredPrompt:any = null

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
