<template>
  <q-card class="q-mb-md">
    <q-card-section class="row items-center justify-between">
      <div>
        <div class="text-h6">{{ bill.categoria }}</div>
        <div class="text-subtitle2 text-grey">{{ bill.descripcion }}</div>
        <div class="text-caption">{{ bill.fecha }}</div>
      </div>
      <div class="text-right">
        <div class="text-h6 text-positive">$ {{ bill.monto }}</div>
        <q-btn
          flat
          dense
          icon="delete"
          color="negative"
          @click="$emit('eliminar', bill.id)"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { Bill } from 'src/types/bills'

defineProps<{
  bill: Bill
}>()

defineEmits<{
  (e: 'eliminar', id: string): void
}>()
</script>
