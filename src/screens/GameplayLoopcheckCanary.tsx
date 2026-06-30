// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - LoopCheck Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bell, CheckCircle2, CircleUserRound, Cpu, Gamepad2, Play, RefreshCw, RotateCcw, Settings, TriangleAlert } from "lucide-react";


export type GameplayLoopcheckCanaryActionId = "notifications-1" | "account-circle-2" | "notifications-3" | "start-game-4" | "restart-game-5" | "sync-6" | "gameplay-1" | "settings-2" | "gameplay-3" | "settings-4";

export interface GameplayLoopcheckCanaryProps {
  actions?: Partial<Record<GameplayLoopcheckCanaryActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayLoopcheckCanary({ actions, runtime }: GameplayLoopcheckCanaryProps) {
  void runtime;
  return (
    <>
      {/* SideNavBar (Hidden on Mobile) */}
      <nav className="hidden md:flex flex-col py-lg px-md gap-sm bg-surface dark:bg-on-background border-r border-outline-variant h-full w-64 fixed left-0 top-0">
      <div className="mb-lg">
      <h1 className="font-display text-display font-bold text-primary">LoopCheck Canary</h1>
      <p className="font-body-sm text-body-sm text-secondary mt-1">System Active</p>
      </div>
      <a className="flex items-center gap-md px-sm py-2 text-on-primary-container bg-primary-container font-bold rounded-lg transition-colors" href="#" data-action-id="gameplay-1" onClick={(event) => { event.preventDefault(); actions?.["gameplay-1"]?.(); }}>
      <Gamepad2  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                  Gameplay
              </a>
      <a className="flex items-center gap-md px-sm py-2 text-secondary hover:bg-surface-container-low transition-colors rounded-lg" href="#" data-action-id="settings-2" onClick={(event) => { event.preventDefault(); actions?.["settings-2"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                  Settings
              </a>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-full w-full md:ml-64 relative">
      {/* TopAppBar (Web) */}
      <header className="hidden md:flex justify-between items-center w-full px-md h-xl max-w-container-max mx-auto bg-surface border-b border-outline-variant flat no shadows z-10 sticky top-0">
      <div className="flex items-center gap-4">
      <div className="font-headline-sm text-headline-sm font-bold text-on-surface">Gameplay Console</div>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-secondary hover:bg-surface-container-low p-1 rounded-full transition-colors active:scale-95 duration-100" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-secondary hover:bg-surface-container-low p-1 rounded-full transition-colors active:scale-95 duration-100" type="button" aria-label="Account Circle" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* TopAppBar (Mobile) */}
      <header className="md:hidden flex justify-between items-center w-full px-md h-xl bg-surface border-b border-outline-variant flat no shadows z-10 sticky top-0">
      <div className="font-display text-display font-bold text-on-surface">LoopCheck Canary</div>
      <div className="flex items-center gap-md">
      <button className="text-secondary hover:bg-surface-container-low p-1 rounded-full transition-colors active:scale-95 duration-100" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-md md:p-lg">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Left Column: Primary Controls & HUD */}
      <div className="lg:col-span-8 flex flex-col gap-gutter">
      {/* HUD / Header Area */}
      <section className="card-surface p-md rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">Session Alpha</h2>
      <div className="font-label-mono text-label-mono text-secondary flex items-center gap-2">
      <span>ID: 8F92-A1</span>
      <span>•</span>
      <span>Uptime: <span id="uptime-display">00:14:22</span></span>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <div className="flex flex-col items-end">
      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Score</span>
      <span className="font-display text-display text-primary">14,250</span>
      </div>
      <div className="h-10 w-px bg-outline-variant"></div>
      <div className="flex flex-col items-end">
      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Progress</span>
      <span className="font-display text-display text-on-surface">78%</span>
      </div>
      </div>
      </section>
      {/* Primary Actions & Status */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Controls */}
      <div className="card-surface p-md rounded-lg flex flex-col gap-md">
      <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2">Execution</h3>
      <div className="flex gap-sm mt-2">
      <button className="btn-primary flex-1 py-2 rounded font-body-md text-body-md flex justify-center items-center gap-2 hover:shadow-md transition-shadow active:scale-95 duration-100" type="button" data-action-id="start-game-4" onClick={actions?.["start-game-4"]}>
      <Play className="text-[18px]" aria-hidden={true} focusable="false" />
                                          Start Game
                                      </button>
      <button className="btn-secondary flex-1 py-2 rounded font-body-md text-body-md flex justify-center items-center gap-2 hover:bg-surface-container-low transition-colors active:scale-95 duration-100" type="button" data-action-id="restart-game-5" onClick={actions?.["restart-game-5"]}>
      <RotateCcw className="text-[18px]" aria-hidden={true} focusable="false" />
                                          Restart Game
                                      </button>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-outline-variant pt-4">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-secondary uppercase">System State</span>
      <span className="font-body-md text-body-md font-bold text-on-surface" id="status-label">Ready</span>
      </div>
      {/* Toggle */}
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-transform duration-200 ease-in-out border-[#E2E8F0]" id="state-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#E2E8F0] cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="state-toggle"></label>
      </div>
      </div>
      </div>
      {/* Secondary Metrics */}
      <div className="card-surface p-md rounded-lg flex flex-col gap-md">
      <div className="flex justify-between items-center border-b border-outline-variant pb-2">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Telemetry</h3>
      <button className="text-secondary hover:text-primary transition-colors flex items-center gap-1 active:scale-95" type="button" data-action-id="sync-6" onClick={actions?.["sync-6"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Sync</span>
      </button>
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <div className="flex justify-between items-center py-2">
      <span className="font-body-sm text-body-sm text-secondary">Last Sync</span>
      <span className="font-label-mono text-label-mono text-on-surface bg-surface-container-low px-2 py-1 rounded" id="sync-timestamp">10:42:15 UTC</span>
      </div>
      <div className="flex justify-between items-center py-2">
      <span className="font-body-sm text-body-sm text-secondary">Latency</span>
      <span className="font-label-mono text-label-mono text-on-surface">24ms</span>
      </div>
      <div className="flex justify-between items-center py-2">
      <span className="font-body-sm text-body-sm text-secondary">Load</span>
      <span className="font-label-mono text-label-mono text-on-surface">42%</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Right Column: Status Cards (High Density) */}
      <div className="lg:col-span-4 flex flex-col gap-sm">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Metrics</h3>
      {/* Status Card 1 */}
      <div className="card-surface card-surface-active rounded p-sm flex flex-col gap-1 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-secondary uppercase">Main Loop</span>
      <CheckCircle2 className="text-[16px] text-green-600" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-mono text-label-mono text-on-surface text-lg">60.0 FPS</div>
      <div className="flex justify-between font-label-mono text-[9px] text-secondary">
      <span>Target: 60</span>
      <span>Drops: 0</span>
      </div>
      </div>
      {/* Status Card 2 */}
      <div className="card-surface card-surface-idle rounded p-sm flex flex-col gap-1 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-secondary uppercase">Memory Heap</span>
      <Cpu className="text-[16px] text-slate-400" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-mono text-label-mono text-on-surface text-lg">256 MB</div>
      <div className="w-full bg-surface-container-low h-1 mt-1 rounded overflow-hidden">
      <div className="bg-slate-400 h-full w-[45%]"></div>
      </div>
      </div>
      {/* Status Card 3 */}
      <div className="card-surface card-surface-warning rounded p-sm flex flex-col gap-1 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-secondary uppercase">Network I/O</span>
      <TriangleAlert className="text-[16px] text-yellow-600" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-mono text-label-mono text-on-surface text-lg">Sub-optimal</div>
      <div className="flex justify-between font-label-mono text-[9px] text-secondary">
      <span>Ping: 120ms</span>
      <span>Loss: 1.2%</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center h-xl px-md bg-surface border-t border-outline-variant z-50">
      <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 transition-transform active:scale-90" href="#" data-action-id="gameplay-3" onClick={(event) => { event.preventDefault(); actions?.["gameplay-3"]?.(); }}>
      <Gamepad2  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Gameplay</span>
      </a>
      <a className="flex flex-col items-center justify-center text-secondary transition-transform active:scale-90" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Settings</span>
      </a>
      </nav>
      
    </>
  );
}
