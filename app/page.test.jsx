import { describe, it, expect, vi } from "vitest";

describe("App", () => {
  it("should call alert", () => {
    // Simula o alert global
    global.alert = vi.fn();

    // Aqui você pode chamar alert() como parte do teste
    alert("Hello, World!");

    // Verifica se o alert foi chamado corretamente
    expect(global.alert).toHaveBeenCalledWith("Hello, World!");
  });
});
