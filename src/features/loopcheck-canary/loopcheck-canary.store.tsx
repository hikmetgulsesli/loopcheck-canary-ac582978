import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import type { ReactNode, Dispatch } from 'react';
import { loadState, saveState } from './loopcheck-canary.repo';
import { defaultState } from '../../__fixtures__/loopcheck-canary.fixture';
import type {
  LoopcheckAppState,
  LoopcheckScreen,
  LoopcheckPreferences,
} from './loopcheck-canary.types';

export type LoopcheckAction =
  | { type: 'HYDRATE'; payload: Partial<LoopcheckAppState> }
  | { type: 'SET_SCREEN'; screen: LoopcheckScreen }
  | { type: 'START_GAME' }
  | { type: 'RESTART_GAME' }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'SYNC' }
  | { type: 'TICK' }
  | { type: 'UPDATE_PREFERENCES'; preferences: Partial<LoopcheckPreferences> }
  | { type: 'SAVE_PREFERENCES' }
  | { type: 'RESET_PREFERENCES' }
  | { type: 'SET_ERROR'; error: string | null };

function advanceRuntime(runtime: LoopcheckAppState['runtime']) {
  const step = 1 + runtime.player.position / 1000 + runtime.obstacles.length / 100;
  const nextObstacles = runtime.obstacles
    .map((o) => ({ ...o, position: o.position + step }))
    .filter((o) => o.position < 120);

  if (Math.random() < 0.03) {
    nextObstacles.push({ lane: Math.floor(Math.random() * 3), position: 0 });
  }

  const nextShards = runtime.shards
    .map((s) => ({ ...s, position: s.position + step }))
    .filter((s) => s.position < 120);

  if (Math.random() < 0.015) {
    nextShards.push({ lane: Math.floor(Math.random() * 3), position: 0 });
  }

  return {
    ...runtime,
    obstacles: nextObstacles,
    shards: nextShards,
  };
}

function reducer(state: LoopcheckAppState, action: LoopcheckAction): LoopcheckAppState {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, ...action.payload };

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
      return {
        ...state,
        lastSyncedAt: new Date().toISOString(),
        error: null,
      };

    case 'TICK':
      return {
        ...state,
        runtime: advanceRuntime(state.runtime),
      };

    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: { ...state.preferences, ...action.preferences },
      };

    case 'SAVE_PREFERENCES':
      return {
        ...state,
        lastSyncedAt: new Date().toISOString(),
        error: null,
      };

    case 'RESET_PREFERENCES':
      return {
        ...state,
        preferences: {
          difficulty: 'normal',
          speed: 50,
          assistMode: false,
        },
        lastSyncedAt: new Date().toISOString(),
        error: null,
      };

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

export function LoopcheckProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const hydratedRef = useRef(false);

  useEffect(() => {
    const saved = loadState();
    if (saved) {
      dispatch({ type: 'HYDRATE', payload: saved });
    }
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (hydratedRef.current) {
      saveState(state);
    }
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
