import { createContext, useContext, useEffect, useReducer } from 'react';
import type { ReactNode, Dispatch } from 'react';
import { loadState, saveState } from './loopcheck-canary.repo';
import { defaultState } from '../../__fixtures__/loopcheck-canary.fixture';
import type {
  LoopcheckAppState,
  LoopcheckScreen,
  LoopcheckPreferences,
} from './loopcheck-canary.types';

export type LoopcheckAction =
  | { type: 'SET_SCREEN'; screen: LoopcheckScreen }
  | { type: 'START_GAME' }
  | { type: 'RESTART_GAME' }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'SYNC'; timestamp: string }
  | {
      type: 'TICK';
      payload: {
        obstacleRand: number;
        shardRand: number;
        obstacleLane: number;
        shardLane: number;
      };
    }
  | { type: 'UPDATE_PREFERENCES'; preferences: Partial<LoopcheckPreferences> }
  | { type: 'SAVE_PREFERENCES'; timestamp: string }
  | { type: 'RESET_PREFERENCES'; timestamp: string }
  | { type: 'SET_ERROR'; error: string | null };

function advanceRuntime(
  runtime: LoopcheckAppState['runtime'],
  randoms: {
    obstacleRand: number;
    shardRand: number;
    obstacleLane: number;
    shardLane: number;
  },
) {
  const step = 1 + runtime.player.position / 1000 + runtime.obstacles.length / 100;
  const nextObstacles = runtime.obstacles
    .map((o) => ({ ...o, position: o.position + step }))
    .filter((o) => o.position < 120);

  if (randoms.obstacleRand < 0.03) {
    nextObstacles.push({ lane: randoms.obstacleLane, position: 0 });
  }

  const nextShards = runtime.shards
    .map((s) => ({ ...s, position: s.position + step }))
    .filter((s) => s.position < 120);

  if (randoms.shardRand < 0.015) {
    nextShards.push({ lane: randoms.shardLane, position: 0 });
  }

  return {
    ...runtime,
    obstacles: nextObstacles,
    shards: nextShards,
  };
}

function withSyncTimestamp(state: LoopcheckAppState, timestamp: string): LoopcheckAppState {
  return { ...state, lastSyncedAt: timestamp, error: null };
}

function reducer(state: LoopcheckAppState, action: LoopcheckAction): LoopcheckAppState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.screen, error: null };

    case 'START_GAME':
      return {
        ...state,
        runtime: {
          ...state.runtime,
          score: 0,
          energy: 100,
          lives: 3,
          paused: false,
          player: { lane: 1, position: 0 },
          obstacles: [],
          shards: [],
        },
        error: null,
      };

    case 'RESTART_GAME':
      return {
        ...state,
        runtime: {
          ...state.runtime,
          score: 0,
          energy: 100,
          lives: 3,
          paused: true,
          player: { lane: 1, position: 0 },
          obstacles: [],
          shards: [],
        },
        error: null,
      };

    case 'TOGGLE_PAUSE':
      return {
        ...state,
        runtime: { ...state.runtime, paused: !state.runtime.paused },
      };

    case 'SYNC':
      return withSyncTimestamp(state, action.timestamp);

    case 'TICK':
      return {
        ...state,
        runtime: advanceRuntime(state.runtime, action.payload),
      };

    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.preferences },
      };

    case 'SAVE_PREFERENCES':
      return withSyncTimestamp(state, action.timestamp);

    case 'RESET_PREFERENCES':
      return withSyncTimestamp(
        {
          ...state,
          preferences: {
            difficulty: 'normal',
            speed: 50,
            assistMode: false,
          },
        },
        action.timestamp,
      );

    case 'SET_ERROR':
      return { ...state, error: action.error };

    default:
      return state;
  }
}

interface LoopcheckContextValue {
  state: LoopcheckAppState;
  dispatch: Dispatch<LoopcheckAction>;
}

const LoopcheckContext = createContext<LoopcheckContextValue | null>(null);

function initializeState(initial: LoopcheckAppState): LoopcheckAppState {
  const saved = loadState();
  return saved ? { ...initial, ...saved } : initial;
}

export function LoopcheckProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, defaultState, initializeState);

  useEffect(() => {
    const handler = setTimeout(() => {
      saveState(state);
    }, 1000);

    const handleBeforeUnload = () => {
      saveState(state);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(handler);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [state]);

  return (
    <LoopcheckContext.Provider value={{ state, dispatch }}>
      {children}
    </LoopcheckContext.Provider>
  );
}

export function useLoopcheckCanary() {
  const context = useContext(LoopcheckContext);
  if (!context) {
    throw new Error('useLoopcheckCanary must be used within a LoopcheckProvider');
  }
  return context;
}
