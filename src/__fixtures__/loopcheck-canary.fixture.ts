import type { LoopcheckAppState } from '../features/loopcheck-canary/loopcheck-canary.types';

export const defaultRuntime = {
  player: { lane: 1, position: 0 },
  obstacles: [] as Array<{ lane: number; position: number }>,
  shards: [] as Array<{ lane: number; position: number }>,
  score: 0,
  energy: 100,
  lives: 3,
  paused: true,
};

export const defaultPreferences = {
  difficulty: 'normal' as const,
  speed: 50,
  assistMode: false,
};

export const defaultState: LoopcheckAppState = {
  screen: 'gameplay',
  preferences: defaultPreferences,
  runtime: defaultRuntime,
  lastSyncedAt: null,
  error: null,
};
