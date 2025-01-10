import { waitFor } from "@testing-library/react";
import usePokemonListStore from "../store/usePokemonListStore";

describe("usePokemonListStore", () => {
  it("should initialize with default values", () => {
    const store = usePokemonListStore.getState();
    expect(store.currentPage).toBe(1);
    expect(store.scrollPosition).toBe(0);
  });

  it("should update currentPage", async () => {
    const store = usePokemonListStore.getState();
    store.setCurrentPage(1);
    await waitFor(() => {
      expect(store.currentPage).toBe(1);
    });
  });

  it("should update scrollPosition", () => {
    const store = usePokemonListStore.getState();
    store.setScrollPosition(100);
    expect(store.scrollPosition).toBe(0);
  });
});
