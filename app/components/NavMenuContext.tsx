"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type OpenMenu = null | "creative";

type NavMenuCtx = {
  openMenu: OpenMenu;
  openCreative: () => void;
  closeAll: () => void;

  // horizontal offset in px: (creativeCenterX - containerCenterX)
  menuOffset: number;
  setMenuOffset: (v: number) => void;
};

const Ctx = createContext<NavMenuCtx | null>(null);

export function NavMenuProvider({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [menuOffset, setMenuOffset] = useState(0);

  const openCreative = useCallback(() => setOpenMenu("creative"), []);
  const closeAll = useCallback(() => setOpenMenu(null), []);

  return (
    <Ctx.Provider value={{ openMenu, openCreative, closeAll, menuOffset, setMenuOffset }}>
      {children}
    </Ctx.Provider>
  );
}

export function useNavMenu() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useNavMenu must be used inside <NavMenuProvider>");
  return ctx;
}
