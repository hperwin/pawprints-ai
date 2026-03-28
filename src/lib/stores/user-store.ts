import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PetProfile {
  id: string;
  name: string;
  breed: string;
  age: string;
  photoUrl: string | null;
}

export interface GiftCard {
  id: string;
  amount: number;
  recipientName: string;
  recipientEmail: string;
  message: string;
  sentAt: string;
  redeemed: boolean;
}

export interface Portrait {
  id: string;
  style: string;
  imageUrl: string;
  createdAt: string;
  isFavorite: boolean;
  petName?: string;
}

interface UserStore {
  // Plan
  plan: "free" | "pro";
  creditsRemaining: number;
  setPlan: (plan: "free" | "pro") => void;
  deductCredit: () => void;

  // Sidebar
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;

  // Portraits
  portraits: Portrait[];
  addPortrait: (portrait: Portrait) => void;
  toggleFavorite: (id: string) => void;
  deletePortrait: (id: string) => void;

  // Pet profiles
  petProfiles: PetProfile[];
  addPetProfile: (pet: PetProfile) => void;
  updatePetProfile: (id: string, updates: Partial<PetProfile>) => void;
  deletePetProfile: (id: string) => void;

  // Gift cards
  giftCards: GiftCard[];
  addGiftCard: (card: GiftCard) => void;

  // Preferences
  defaultStyle: string;
  setDefaultStyle: (style: string) => void;

  // User info
  displayName: string;
  email: string;
  avatarUrl: string | null;
  setUserInfo: (info: { displayName: string; email: string; avatarUrl?: string | null }) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      plan: "free",
      creditsRemaining: 3,
      setPlan: (plan) => set({ plan, creditsRemaining: plan === "pro" ? 999 : 3 }),
      deductCredit: () =>
        set((state) => ({
          creditsRemaining: Math.max(0, state.creditsRemaining - 1),
        })),

      sidebarCollapsed: false,
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

      portraits: [],
      addPortrait: (portrait) =>
        set((state) => ({ portraits: [portrait, ...state.portraits] })),
      toggleFavorite: (id) =>
        set((state) => ({
          portraits: state.portraits.map((p) =>
            p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
          ),
        })),
      deletePortrait: (id) =>
        set((state) => ({
          portraits: state.portraits.filter((p) => p.id !== id),
        })),

      petProfiles: [],
      addPetProfile: (pet) =>
        set((state) => ({ petProfiles: [...state.petProfiles, pet] })),
      updatePetProfile: (id, updates) =>
        set((state) => ({
          petProfiles: state.petProfiles.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        })),
      deletePetProfile: (id) =>
        set((state) => ({
          petProfiles: state.petProfiles.filter((p) => p.id !== id),
        })),

      giftCards: [],
      addGiftCard: (card) =>
        set((state) => ({ giftCards: [...state.giftCards, card] })),

      defaultStyle: "renaissance",
      setDefaultStyle: (style) => set({ defaultStyle: style }),

      displayName: "Pet Lover",
      email: "demo@pawprints.ai",
      avatarUrl: null,
      setUserInfo: (info) =>
        set({
          displayName: info.displayName,
          email: info.email,
          avatarUrl: info.avatarUrl ?? null,
        }),
    }),
    { name: "pawprints-user" }
  )
);
