"use client";

import { ModeToggle } from "./DarkModeToggle";
import { useSidebar } from "./ui/sidebar";

export function ModeToggleWrapper() {
  const { open, openMobile, isMobile } = useSidebar();
  
  // Hide the toggle when sidebar is open
  const isHidden = isMobile ? openMobile : open;

  if (isHidden) {
    return null;
  }

  return (
    <div className="fixed md:top-10 md:right-6 top-4 right-18 md:left-auto z-10">
      <div className="w-10 h-10 md:w-12 md:h-12">
        <ModeToggle />
      </div>
    </div>
  );
}
