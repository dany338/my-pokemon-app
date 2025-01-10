import "@testing-library/jest-dom";
import { vi } from 'vitest';

// Mock global.window.scrollTo si lo usas
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});