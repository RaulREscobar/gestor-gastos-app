import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Bill } from 'src/types/bills'

export const useBillsStore = defineStore('gastos', () => {


  const list = ref<Bill[]>([
     {
        id: '1',
        monto: 2500,
        categoria: 'Alimentación',
        descripcion: 'Compras en supermercado',
        fecha: '2025-05-01',
      },
      {
        id: '2',
        monto: 1200,
        categoria: 'Transporte',
        descripcion: 'Nafta',
        fecha: '2025-05-02',
      },
      {
        id: '3',
        monto: 3500,
        categoria: 'Alquiler',
        descripcion: 'Pago mensual',
        fecha: '2025-05-03',
      },
      {
        id: '4',
        monto: 800,
        categoria: 'Entretenimiento',
        descripcion: 'Cine',
        fecha: '2025-05-03',
      },
      {
        id: '5',
        monto: 950,
        categoria: 'Transporte',
        descripcion: 'Sube',
        fecha: '2025-05-04',
      },
      {
        id: '6',
        monto: 500,
        categoria: 'Alimentación',
        descripcion: 'Panadería',
        fecha: '2025-05-04',
      }
  ])

  function addBill(gasto: Bill) {
    list.value.push(gasto)
  }

  function deleteBill(id: string) {
    list.value = list.value.filter(g => g.id !== id)
  }

  return { list, addBill, deleteBill }
})
