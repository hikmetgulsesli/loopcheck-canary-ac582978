export type LoopcheckScreen = 'gameplay' | 'settings';

export type LoopcheckDifficulty = 'easy' | 'normal' | 'hard';

export interface LoopcheckPlayer {
  lane: number;
  position: number;
}

export interface LoopcheckObstacle {
  lane: number;
  position: number;
}

export interface LoopcheckShard {
  lane: number;
  position: number;
}

export interface LoopcheckRuntime {
  player: LoopcheckPlayer;
  obstacles: LoopcheckObstacle[];
  shards: LoopcheckShard[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
}

export interface LoopcheckPreferences {
  difficulty: LoopcheckDifficulty;
  speed: number;
  assistMode: boolean;
}

export interface LoopcheckAppState {
  screen: LoopcheckScreen;
  preferences: LoopcheckPreferences;
  runtime: LoopcheckRuntime;
  lastSyncedAt: string | null;
  error: string | null;
}
