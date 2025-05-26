<template>
  <q-page padding>
    <div class="q-mb-md">
      <AddBillForm />
    </div>
    <BillList />
  </q-page>
</template>

<script setup lang="ts">
import AddBillForm from 'src/components/gasto/AddBillForm.vue';
import BillList from 'src/components/gasto/BillList.vue';
</script>
