export interface ItemCarrito {
  precio: number;
  cantidad: number;
  descuento?: number;
}

export function calcularTotal(items: ItemCarrito[]): number {
  const total = items.reduce((acumulado, item) => {
    if (item.cantidad < 0) {
      throw new Error("Cantidad inválida");
    }

    const descuento = item.descuento ?? 0;
    return acumulado + item.precio * item.cantidad * (1 - descuento);
  }, 0);

  return Math.round((total + Number.EPSILON) * 100) / 100;
}
