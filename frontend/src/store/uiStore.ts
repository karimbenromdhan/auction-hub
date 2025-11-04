import { create } from 'zustand';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

interface Modal {
  id: string;
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
}

interface UIState {
  isLoading: boolean;
  toasts: Toast[];
  modals: Modal[];
  
  // Loading actions
  setLoading: (isLoading: boolean) => void;
  
  // Toast actions
  showToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
  
  // Modal actions
  openModal: (modal: Omit<Modal, 'isOpen'>) => void;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  toasts: [],
  modals: [],

  setLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  showToast: (toast: Omit<Toast, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: Toast = { ...toast, id };
    
    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));

    // Auto-remove toast after duration
    const duration = toast.duration || 5000;
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, duration);
  },

  removeToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },

  clearToasts: () => {
    set({ toasts: [] });
  },

  openModal: (modal: Omit<Modal, 'isOpen'>) => {
    const newModal: Modal = { ...modal, isOpen: true };
    set((state) => ({
      modals: [...state.modals, newModal],
    }));
  },

  closeModal: (id: string) => {
    set((state) => ({
      modals: state.modals.filter((m) => m.id !== id),
    }));
  },

  closeAllModals: () => {
    set({ modals: [] });
  },
}));
