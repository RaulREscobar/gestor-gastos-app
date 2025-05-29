<template>
  <q-page padding>
    <div class="text-h5 q-mb-md">Resumen</div>
     <BillList />
    <ChartBills />
  </q-page>
</template>

<script setup lang="ts">
import BillList from 'src/components/bills/BillList.vue';
import ChartBills from 'src/components/ui/ChartBills.vue';
</script>
