import { useEffect, useMemo } from 'react';
import {
  GameplayLoopcheckCanary,
  GameSettingsLoopcheckCanary,
} from './screens';
import type {
  GameplayLoopcheckCanaryActionId,
  GameSettingsLoopcheckCanaryActionId,
} from './screens';
import {
  LoopcheckProvider,
  useLoopcheckCanary,
} from './features/loopcheck-canary/loopcheck-canary.store';

declare global {
  interface Window {
    app?: {
      screen: string;
      runtime: Record<string, unknown>;
      lastSyncedAt: string | null;
      error: string | null;
      dispatch: unknown;
    };
  }
}

function AppShell() {
  const { state, dispatch } = useLoopcheckCanary();

  useEffect(() => {
    window.app = {
      screen: state.screen,
      runtime: state.runtime as unknown as Record<string, unknown>,
      lastSyncedAt: state.lastSyncedAt,
      error: state.error,
      dispatch,
    };
  }, [state, dispatch]);

  useEffect(() => {
    if (state.runtime.paused) return;
    let frameId = 0;
    const loop = () => {
      dispatch({
        type: 'TICK',
        payload: {
          obstacleRand: Math.random(),
          shardRand: Math.random(),
          obstacleLane: Math.floor(Math.random() * 3),
          shardLane: Math.floor(Math.random() * 3),
        },
      });
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [state.runtime.paused, dispatch]);

  const gameplayActions = useMemo<Partial<Record<GameplayLoopcheckCanaryActionId, () => void>>>(
    () => ({
      'notifications-1': () => {},
      'account-circle-2': () => {},
      'notifications-3': () => {},
      'start-game-4': () => dispatch({ type: 'START_GAME' }),
      'restart-game-5': () => dispatch({ type: 'RESTART_GAME' }),
      'sync-6': () => dispatch({ type: 'SYNC', timestamp: new Date().toISOString() }),
      'gameplay-1': () => {},
      'settings-2': () => dispatch({ type: 'SET_SCREEN', screen: 'settings' }),
      'gameplay-3': () => {},
      'settings-4': () => dispatch({ type: 'SET_SCREEN', screen: 'settings' }),
    }),
    [dispatch],
  );

  const settingsActions = useMemo<Partial<Record<GameSettingsLoopcheckCanaryActionId, () => void>>>(
    () => ({
      'notifications-1': () => {},
      'account-circle-2': () => {},
      'save-preferences-3': () =>
        dispatch({ type: 'SAVE_PREFERENCES', timestamp: new Date().toISOString() }),
      'return-to-gameplay-4': () => dispatch({ type: 'SET_SCREEN', screen: 'gameplay' }),
      'reset-preferences-5': () =>
        dispatch({ type: 'RESET_PREFERENCES', timestamp: new Date().toISOString() }),
      'gameplay-6': () => dispatch({ type: 'SET_SCREEN', screen: 'gameplay' }),
      'settings-7': () => {},
      'gameplay-1': () => dispatch({ type: 'SET_SCREEN', screen: 'gameplay' }),
      'settings-2': () => {},
    }),
    [dispatch],
  );

  return (
    <div
      data-setfarm-root="loopcheck-canary"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      {state.screen === 'gameplay' ? (
        <GameplayLoopcheckCanary actions={gameplayActions} runtime={state.runtime} />
      ) : (
        <GameSettingsLoopcheckCanary actions={settingsActions} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LoopcheckProvider>
      <AppShell />
    </LoopcheckProvider>
  );
}
