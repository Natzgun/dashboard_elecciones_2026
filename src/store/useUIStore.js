import { create } from 'zustand';

/**
 * UI state store - sidebar, theme, modals
 */
const useUIStore = create((set) => ({
  sidebarOpen: true,
  sidebarCollapsed: false,
  activeModal: null,

  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  openModal: (modalId) => set({ activeModal: modalId }),
  closeModal: () => set({ activeModal: null }),
}));

export default useUIStore;
