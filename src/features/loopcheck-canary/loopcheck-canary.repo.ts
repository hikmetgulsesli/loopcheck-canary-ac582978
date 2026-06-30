import type { LoopcheckAppState } from './loopcheck-canary.types';

const STORAGE_KEY = 'loopcheck-canary-v1';

export function loadState(): Partial<LoopcheckAppState> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Partial<LoopcheckAppState>;
  } catch {
    return null;
  }
}

export function saveState(state: LoopcheckAppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage is best-effort; failures should not crash the app.
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore cleanup failures.
  }
}
