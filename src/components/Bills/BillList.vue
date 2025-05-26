<template>
  <div v-if="bills.length > 0">
    <BillCard
      v-for="gasto in bills"
      :key="gasto.id"
      :bill="gasto"
      @eliminar="deleteBill"
    />
  </div>
  <div v-else class="text-center q-my-xl">
    <q-icon name="sentiment_dissatisfied" size="3em" color="grey" />
    <div class="text-grey-6">No hay gastos registrados.</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBillsStore } from 'src/stores/bills'
import BillCard from './BillCard.vue'

const billsStore = useBillsStore()
const bills = computed(() => billsStore.list)

function deleteBill(id: string) {
  billsStore.deleteBill(id)
}
</script>
