<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Gastos por Categoría</div>
    </q-card-section>
    <q-card-section>
      <canvas ref="chartRef" width="400" height="300" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'
import { useBillsStore } from 'src/stores/bills'

const chartRef = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null

const billsStore = useBillsStore()

function getDatosPorCategoria() {
  const datos: Record<string, number> = {}

  billsStore.list.forEach(gasto => {
   const categoria = gasto.categoria || 'Otros'
    if (!datos[categoria]) {
      datos[categoria] = 0
    }
    datos[categoria] += gasto.monto

  })

  return {
    labels: Object.keys(datos),
    data: Object.values(datos),
  }
}

function renderChart() {
  const { labels, data } = getDatosPorCategoria()

  if (chart) chart.destroy()

  if (chartRef.value) {
    chart = new Chart(chartRef.value, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              '#42A5F5', '#66BB6A', '#FFA726', '#FF7043', '#AB47BC', '#26C6DA'
            ],
          },
        ],
      },
    })
  }
}

onMounted(renderChart)

watch(() => billsStore.list, renderChart, { deep: true })
</script>
