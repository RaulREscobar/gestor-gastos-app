<template>
  <q-form @submit.prevent="saveBill">
    <q-input
      v-model.number="bill.monto"
      label="Monto"
      type="number"
      required
    />
    <q-select
      v-model="bill.categoria"
      label="Categoría"
      :options="categorias"
      required
    />
    <q-input
      v-model="bill.descripcion"
      label="Descripción"
      type="text"
    />
    <q-input
      v-model="bill.fecha"
      label="Fecha"
      type="date"
      required
    />

    <q-btn label="Agregar gasto" type="submit" color="primary" class="q-mt-md" />
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { uid } from 'quasar'
import { useBillsStore } from 'src/stores/bills'
import type { Bill } from 'src/types/bills'

const billStore = useBillsStore()

const bill = ref<Omit<Bill, 'id'>>({
  monto: 0,
  categoria: '',
  descripcion: '',
  fecha: new Date().toISOString().substring(0, 10),
})

const categorias = ['Alimentación', 'Transporte', 'Hogar', 'Salud', 'Entretenimiento', 'Otros']

function saveBill() {
  const newBill: Bill = {
    id: uid(),
    ...bill.value,
  }
  billStore.addBill(newBill)

  // Reset
  bill.value = {
    monto: 0,
    categoria: '',
    descripcion: '',
    fecha: new Date().toISOString().substring(0, 10),
  }
}
</script>
