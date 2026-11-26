
import { describe, expect, it } from "vitest";
import { calcularTotal } from "./calcularTotal";

describe("calcularTotal", () => {
  it("devuelve cero para un carrito vacío", () => {
    expect(calcularTotal([])).toBe(0);
  });

  it("aplica el descuento al precio por cantidad", () => {
    expect(
      calcularTotal([{ precio: 100, cantidad: 2, descuento: 0.25 }])
    ).toBe(150);
  });

  it("lanza un error si la cantidad es negativa", () => {
    expect(() =>
      calcularTotal([{ precio: 100, cantidad: -1 }])
    ).toThrow("Cantidad inválida");
  });

  it("redondea el total a dos decimales", () => {
    expect(
      calcularTotal([{ precio: 19.99, cantidad: 2, descuento: 0.15 }])
    ).toBe(33.98);
  });

  it("calcula el total sin descuento", () => {
    expect(
      calcularTotal([{ precio: 100, cantidad: 2 }])
    ).toBe(200);
  });

  it("acepta un descuento del 100 por ciento", () => {
    expect(
      calcularTotal([{ precio: 100, cantidad: 2, descuento: 1 }])
    ).toBe(0);
  });

  it("rechaza descuentos superiores a 1", () => {
    expect(() =>
      calcularTotal([{ precio: 100, cantidad: 1, descuento: 1.5 }])
    ).toThrow("Descuento inválido");
  });

  it("rechaza descuentos negativos", () => {
    expect(() =>
      calcularTotal([{ precio: 100, cantidad: 1, descuento: -0.2 }])
    ).toThrow("Descuento inválido");
  });

  it("rechaza descuentos que no son números finitos", () => {
    expect(() =>
      calcularTotal([{ precio: 100, cantidad: 1, descuento: NaN }])
    ).toThrow("Descuento inválido");
  });
});
