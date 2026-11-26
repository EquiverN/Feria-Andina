import { describe, expect, it } from "vitest";
import { calcularTotal } from "./calcularTotal";

describe("calcularTotal", () => {
  it("devuelve cero para un carrito vacío", () => {
    expect(calcularTotal([])).toBe(0);
  });

  it("aplica el descuento del producto y redondea a dos decimales", () => {
    expect(calcularTotal([{ precio: 19.99, cantidad: 2, descuento: 0.15 }])).toBe(33.98);
  });

  it("lanza un error cuando la cantidad es negativa", () => {
    expect(() => calcularTotal([{ precio: 100, cantidad: -1 }])).toThrowError("Cantidad inválida");
  });
});
