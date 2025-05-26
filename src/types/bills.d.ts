export interface Bill {
  id: string
  monto: number
  categoria: string
  descripcion?: string
  fecha: string // o Date, dependiendo cómo lo manejes
}
