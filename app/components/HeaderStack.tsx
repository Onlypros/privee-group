// // app/components/HeaderStack.tsx
// "use client";

// import { ReactNode, useRef, useEffect } from "react";
// import { useNavMenu } from "./NavMenuContext";

// /** Wrap GlobalNav + CreativePanel; closes menus on pointer/blur leaving both */
// export default function HeaderStack({ children }: { children: ReactNode }) {
//   const { closeAll } = useNavMenu();
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     let closeTimer: number | undefined;
//     const el = ref.current;

//     const handleLeave = () => {
//       // tiny delay smooths micro-gaps between nav and panel
//       closeTimer = window.setTimeout(closeAll, 80);
//     };
//     const handleEnter = () => {
//       if (closeTimer) window.clearTimeout(closeTimer);
//     };

//     el?.addEventListener("mouseleave", handleLeave);
//     el?.addEventListener("mouseenter", handleEnter);
//     return () => {
//       el?.removeEventListener("mouseleave", handleLeave);
//       el?.removeEventListener("mouseenter", handleEnter);
//       if (closeTimer) window.clearTimeout(closeTimer);
//     };
//   }, [closeAll]);

//   return <div ref={ref}>{children}</div>;
// }
