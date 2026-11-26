
export interface ItemCarrito {
  precio: number;
  cantidad: number;
  descuento?: number;
}

export function calcularTotal(items: ItemCarrito[]): number {
  let total = 0;

  for (const item of items) {
    if (item.cantidad < 0) {
      throw new Error("Cantidad inválida");
    }

    const descuento = item.descuento ?? 0;

    if (!Number.isFinite(descuento) || descuento < 0 || descuento > 1) {
      throw new Error("Descuento inválido");
    }

    total += item.precio * item.cantidad * (1 - descuento);
  }

  return Math.round((total + Number.EPSILON) * 100) / 100;
}
