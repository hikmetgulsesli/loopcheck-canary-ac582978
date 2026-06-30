// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - LoopCheck Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bell, Bug, CircleUserRound, Gamepad2, Keyboard, Settings, SlidersHorizontal } from "lucide-react";


export type GameSettingsLoopcheckCanaryActionId = "notifications-1" | "account-circle-2" | "save-preferences-3" | "return-to-gameplay-4" | "reset-preferences-5" | "gameplay-6" | "settings-7" | "gameplay-1" | "settings-2";

export interface GameSettingsLoopcheckCanaryProps {
  actions?: Partial<Record<GameSettingsLoopcheckCanaryActionId, () => void>>;

}

export function GameSettingsLoopcheckCanary({ actions }: GameSettingsLoopcheckCanaryProps) {
  return (
    <>
      {/* TopAppBar (Nav Cluster for Desktop) */}
      <header className="bg-surface border-b border-outline-variant flex-shrink-0 z-40">
      <div className="flex justify-between items-center w-full px-md h-xl max-w-container-max mx-auto">
      {/* Brand */}
      <div className="flex items-center gap-sm">
      <Bug  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-display text-display font-bold text-on-surface">LoopCheck Canary</span>
      </div>
      {/* Desktop Navigation Cluster */}
      <nav className="hidden md:flex h-full items-end gap-lg">
      <a className="text-secondary pb-[14px] hover:bg-surface-container-low transition-colors font-body-md text-body-md px-sm rounded-t-DEFAULT" href="#" data-action-id="gameplay-1" onClick={(event) => { event.preventDefault(); actions?.["gameplay-1"]?.(); }}>
                          Gameplay
                      </a>
      <a className="text-primary border-b-2 border-primary pb-[12px] font-body-md text-body-md px-sm font-semibold" href="#" data-action-id="settings-2" onClick={(event) => { event.preventDefault(); actions?.["settings-2"]?.(); }}>
                          Settings
                      </a>
      </nav>
      {/* Trailing Actions */}
      <div className="flex items-center gap-sm">
      <button className="p-[6px] rounded-full hover:bg-surface-container-low transition-colors text-primary active:scale-95 duration-100 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-1 focus:ring-offset-surface" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-[6px] rounded-full hover:bg-surface-container-low transition-colors text-primary active:scale-95 duration-100 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-1 focus:ring-offset-surface" type="button" aria-label="Account Circle" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Workspace */}
      <main className="flex-grow overflow-y-auto pb-24 md:pb-0">
      <div className="max-w-container-max mx-auto w-full px-md py-lg md:px-gutter md:py-xl flex flex-col gap-lg h-full">
      {/* Page Header */}
      <div className="flex flex-col gap-xs">
      <h1 className="font-headline-sm text-headline-sm text-on-surface">Game Settings</h1>
      <p className="font-body-sm text-body-sm text-secondary">Configure simulation parameters and input mapping.</p>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
      {/* Main Settings Form (Left Col) */}
      <div className="md:col-span-8 flex flex-col gap-md">
      {/* Core Preferences Card */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT flex flex-col shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-secondary-fixed-dim"></div>
      <div className="p-md border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center">
      <h2 className="font-label-caps text-label-caps text-on-surface uppercase">Simulation Parameters</h2>
      <SlidersHorizontal className="text-secondary text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="p-md flex flex-col gap-lg">
      {/* Difficulty Setting */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Difficulty Threshold</label>
      <div className="grid grid-cols-3 gap-xs">
      <label className="cursor-pointer relative">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="relaxed" />
      <div className="w-full text-center py-2 px-3 border border-outline-variant rounded-DEFAULT bg-surface text-secondary peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary peer-checked:font-semibold hover:bg-surface-container-low transition-colors font-body-sm text-body-sm">
                                                  Relaxed
                                              </div>
      </label>
      <label className="cursor-pointer relative">
      <input defaultChecked={true} className="peer sr-only" name="difficulty" type="radio" defaultValue="standard" />
      <div className="w-full text-center py-2 px-3 border border-outline-variant rounded-DEFAULT bg-surface text-secondary peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary peer-checked:font-semibold hover:bg-surface-container-low transition-colors font-body-sm text-body-sm">
                                                  Standard
                                              </div>
      </label>
      <label className="cursor-pointer relative">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="strict" />
      <div className="w-full text-center py-2 px-3 border border-outline-variant rounded-DEFAULT bg-surface text-secondary peer-checked:bg-error-container peer-checked:text-on-error-container peer-checked:border-error peer-checked:font-semibold hover:bg-surface-container-low transition-colors font-body-sm text-body-sm">
                                                  Strict
                                              </div>
      </label>
      </div>
      </div>
      {/* Speed Setting */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-end">
      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Execution Speed</label>
      <span className="font-label-mono text-label-mono text-primary font-bold" id="speedValue">1.0x</span>
      </div>
      <input className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface" max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.0" />
      <div className="flex justify-between font-label-mono text-[10px] text-secondary">
      <span>0.5x</span>
      <span>2.0x</span>
      </div>
      </div>
      {/* Telemetry Toggle */}
      <div className="flex items-center justify-between py-xs">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface font-semibold">Diagnostic Telemetry</span>
      <span className="font-body-sm text-body-sm text-secondary">Send anonymous execution data</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </div>
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-md mt-sm">
      <div className="flex gap-sm w-full sm:w-auto">
      <button className="w-full sm:w-auto bg-primary-container text-on-primary-container font-body-md text-body-md font-bold px-md py-[6px] rounded-DEFAULT border border-primary hover:bg-primary hover:text-on-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 shadow-sm active:scale-95" type="button" data-action-id="save-preferences-3" onClick={actions?.["save-preferences-3"]}>
                                      Save Preferences
                                  </button>
      <button className="w-full sm:w-auto bg-surface border border-outline text-on-surface font-body-md text-body-md px-md py-[6px] rounded-DEFAULT hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-outline focus:ring-offset-2 shadow-sm active:scale-95" type="button" data-action-id="return-to-gameplay-4" onClick={actions?.["return-to-gameplay-4"]}>
                                      Return to Gameplay
                                  </button>
      </div>
      <button className="text-error font-body-sm text-body-sm hover:underline focus:outline-none rounded-DEFAULT px-2 py-1 hover:bg-error-container transition-colors" type="button" data-action-id="reset-preferences-5" onClick={actions?.["reset-preferences-5"]}>
                                  Reset Preferences
                              </button>
      </div>
      </div>
      {/* Input Help Context (Right Col) */}
      <div className="md:col-span-4 flex flex-col gap-md">
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-md flex flex-col gap-sm shadow-sm relative">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-outline-variant"></div>
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase flex items-center gap-xs border-b border-outline-variant pb-xs mb-xs">
      <Keyboard className="text-[14px]" aria-hidden={true} focusable="false" />
                                  Input Mapping Help
                              </h3>
      <div className="flex flex-col gap-xs font-label-mono text-label-mono text-on-surface-variant">
      <div className="flex justify-between items-center py-xs border-b border-surface-container-highest border-dashed">
      <span>Execute Cycle</span>
      <span className="bg-surface-container-highest px-2 py-[2px] rounded-DEFAULT border border-outline-variant text-on-surface font-semibold">SPACE</span>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-surface-container-highest border-dashed">
      <span>Step Forward</span>
      <span className="bg-surface-container-highest px-2 py-[2px] rounded-DEFAULT border border-outline-variant text-on-surface font-semibold">→</span>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-surface-container-highest border-dashed">
      <span>Step Back</span>
      <span className="bg-surface-container-highest px-2 py-[2px] rounded-DEFAULT border border-outline-variant text-on-surface font-semibold">←</span>
      </div>
      <div className="flex justify-between items-center py-xs border-b border-surface-container-highest border-dashed">
      <span>Toggle Overlay</span>
      <span className="bg-surface-container-highest px-2 py-[2px] rounded-DEFAULT border border-outline-variant text-on-surface font-semibold">TAB</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span>Emergency Stop</span>
      <span className="bg-error-container text-on-error-container px-2 py-[2px] rounded-DEFAULT border border-error font-semibold">ESC</span>
      </div>
      </div>
      <div className="mt-xs p-xs bg-surface-container-low rounded-DEFAULT border border-surface-variant">
      <p className="font-body-sm text-[11px] leading-tight text-secondary">Custom keybinding support requires Canary build v2.4.1 or higher. Current build: v2.4.0-stable.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center h-xl px-md bg-surface border-t border-outline-variant z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <button className="flex flex-col items-center justify-center text-secondary w-[80px] h-full focus:outline-none" type="button" data-action-id="gameplay-6" onClick={actions?.["gameplay-6"]}>
      <Gamepad2 className="text-[24px] mb-xs" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Gameplay</span>
      </button>
      <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 h-[40px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-container transition-transform active:scale-90" type="button" data-action-id="settings-7" onClick={actions?.["settings-7"]}>
      <Settings className="text-[20px] mb-[2px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[9px] font-bold tracking-widest uppercase">Settings</span>
      </button>
      </nav>
    </>
  );
}
