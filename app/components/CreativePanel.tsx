// // app/components/CreativePanel.tsx
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useNavMenu } from "./NavMenuContext";

// export default function CreativePanel() {
//   const { openMenu, openCreative, closeAll, menuOffset } = useNavMenu();
//   const open = openMenu === "creative";

//   // Measure the real header height (including safe-area + any padding)
//   const [headerTop, setHeaderTop] = useState<number>(80); // sensible default

//   useEffect(() => {
//     const measure = () => {
//       const nav = document.querySelector('nav[aria-label="Primary"]') as HTMLElement | null;
//       if (!nav) return;
//       const rect = nav.getBoundingClientRect();
//       // rect.height already includes padding & safe-area insets applied to nav
//       const GAP = 10; // small space between header and panel
//       setHeaderTop(rect.height + GAP);
//     };

//     measure();
//     window.addEventListener("resize", measure);
//     window.addEventListener("orientationchange", measure);
//     // fonts loading can subtly change height; re-measure after a tick
//     const t = setTimeout(measure, 50);

//     return () => {
//       window.removeEventListener("resize", measure);
//       window.removeEventListener("orientationchange", measure);
//       clearTimeout(t);
//     };
//   }, []);

//   return (
//     <div
//       className={[
//         "hidden sm:block",
//         "sticky z-[1001]",                    // ensure it isn't clipped by the header
//         "overflow-visible",
//         "transition-[max-height] duration-300 ease-out",
//         open ? "max-h-80 pointer-events-auto" : "max-h-0 pointer-events-none",
//         "py-2",
//       ].join(" ")}
//       style={{ top: headerTop }}              // <-- exact placement below the header
//       onMouseEnter={openCreative}
//       onFocusCapture={openCreative}
//       onKeyDown={(e) => e.key === "Escape" && closeAll()}
//       role="region"
//       aria-label="Creative submenu"
//       aria-hidden={!open}
//     >
//       <div
//         className={[
//           "mx-auto max-w-6xl px-6",
//           "transition-all duration-200",
//           open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
//         ].join(" ")}
//       >
//         {/* Shift horizontally to sit under the CREATIVE link */}
//         <div className="flex justify-center" style={{ transform: `translateX(${menuOffset || 0}px)` }}>
//           <div className="rounded-md bg-black text-white shadow-xl ring-1 ring-white/10 border border-white/10 min-w-[180px]">
//             <ul className="py-2">
//               <li>
//                 <Link
//                   href="/branding"
//                   className="block px-4 py-2 text-[10px] tracking-[0.02em] hover:underline underline-offset-4"
//                   onClick={closeAll}
//                 >
//                   BRANDING
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/photography"
//                   className="block px-4 py-2 text-[10px] tracking-[0.02em] hover:underline underline-offset-4"
//                   onClick={closeAll}
//                 >
//                   PHOTOGRAPHY
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
