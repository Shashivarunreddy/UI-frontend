import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { CommandMenu } from "@/components/command-menu"
import { GitHubLink } from "@/components/github-link"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import { Separator } from "@/components/ui/separator"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center gap-2">
        <MobileNav className="flex lg:hidden" />
        <Link href="/" className="hidden lg:flex items-center space-x-1.5">
          <Icons.logo className="size-6" />
          <span className="font-semibold text-lg">{siteConfig.name}</span>
        </Link>
        <MainNav className="hidden lg:flex ml-8" />
        <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <Separator
            orientation="vertical"
            className="ml-2 hidden h-4 lg:block"
          />
          <GitHubLink />
          <Separator orientation="vertical" className="h-4" />
          <ModeSwitcher />
        </div>
      </div>
    </header>
  )
}