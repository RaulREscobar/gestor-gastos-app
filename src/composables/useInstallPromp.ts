// src/composables/useInstallPrompt.ts
import { ref, onMounted } from 'vue'

const deferredPrompt = ref<Event | null>(null)

export function useInstallPrompt() {
  const promptToInstall = async () => {
    if (deferredPrompt.value && 'prompt' in deferredPrompt.value) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (deferredPrompt.value as any).prompt()
    }
  }

  onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault()
      deferredPrompt.value = e
    })
  })

  return {
    promptToInstall,
    deferredPrompt,
  }
}
