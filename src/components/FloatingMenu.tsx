import { useState } from "react"

/**
 * Constants
 */

import { navLinks } from "@/constants"
import { cn } from "@/libs/utils"

const FloatingMenu = () => {
    const [active, setActive] = useState("#hero")
  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 bg-black border border-neutral-600 pt-4 rounded-full hidden z-10 lg:block ">
  {navLinks.map((link) => {
    const Icon = link.icon;

    return (
      <a
        key={link.label}
        href={link.link}
        onClick={() => setActive(link.link)}
        className={cn("text-neutral-400 flex items-center  gap-2 hover:text-white transition-colors duration-200 mb-6 px-4",  active ===link.link && "text-primary")}
      >
        <Icon className="text-white size-5" />
      </a>
    );
  })}
</div>

  )
}

export default FloatingMenu
