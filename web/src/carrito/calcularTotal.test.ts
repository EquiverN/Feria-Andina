import { describe, expect, it } from "vitest";
import { calcularTotal } from "./calcularTotal";

describe("calcularTotal", () => {
  it("devuelve cero para un carrito vacío", () => {
    expect(calcularTotal([])).toBe(0);
  });

  it("aplica el descuento al precio por cantidad", () => {
    expect(calcularTotal([{ precio: 100, cantidad: 2, descuento: 0.25 }])).toBe(
      150,
    );
  });

  it("lanza un error si la cantidad es negativa", () => {
    expect(() => calcularTotal([{ precio: 100, cantidad: -1 }])).toThrow(
      new Error("Cantidad inválida"),
    );
  });
});
