import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) => {
      const win = state.windows[windowKey];
      if (!win) return;

      win.isOpen = true;
      win.isMinimized = false; // ensure visible on open
      win.zIndex = state.nextZIndex;
      win.data = data ?? win.data;
      state.nextZIndex++;
    }),

    closeWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if (!win) return;

      win.isOpen = false;
      win.isMinimized = false; // reset
      win.zIndex = INITIAL_Z_INDEX;
      win.data = null;
    }),

    focusWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if (!win) return;

      win.zIndex = state.nextZIndex;
      state.nextZIndex++;
    }),

    minimizeWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if (!win) return;
      win.isMinimized = true;
    }),

    unminimizeWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if (!win) return;
      if (!win.isOpen) win.isOpen = true;
      win.isMinimized = false;
      win.zIndex = state.nextZIndex;
      state.nextZIndex++;
    }),

    toggleMinimize: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if (!win) return;
      if (win.isMinimized) {
        win.isMinimized = false;
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      } else {
        win.isMinimized = true;
      }
    }),
  }))
)

export default useWindowStore;