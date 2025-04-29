
import { Moon, Sun, Droplet, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative w-8 h-8 rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark-purple:-rotate-90 dark-purple:scale-0 dark-blue:-rotate-90 dark-blue:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark-purple:rotate-0 dark-purple:scale-100 dark-blue:rotate-0 dark-blue:scale-100" />
          <span className="sr-only">Toggle theme</span>
          
          {/* Active indicator */}
          {theme !== 'light' && (
            <span className={cn(
              "absolute bottom-0 right-0 w-2 h-2 rounded-full",
              theme === 'dark-purple' ? "bg-primary" :
              "bg-blue-500"
            )}></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={theme !== 'light' ? 'glass-card-dark' : ''}>
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2 cursor-pointer">
          <div className="p-1 rounded-full bg-primary-100 text-primary-600">
            <Sun className="h-4 w-4" />
          </div>
          <span>Light</span>
          {theme === 'light' && (
            <span className="ml-auto">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4.66668L6.00002 12L2.66669 8.66668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-purple")} className="flex items-center gap-2 cursor-pointer">
          <div className="p-1 rounded-full bg-purple-900/30 text-purple-400">
            <Droplet className="h-4 w-4" />
          </div>
          <span>Dark Purple</span>
          {theme === 'dark-purple' && (
            <span className="ml-auto">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4.66668L6.00002 12L2.66669 8.66668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-blue")} className="flex items-center gap-2 cursor-pointer">
          <div className="p-1 rounded-full bg-blue-900/30 text-blue-400">
            <Droplet className="h-4 w-4" />
          </div>
          <span>Dark Blue</span>
          {theme === 'dark-blue' && (
            <span className="ml-auto">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4.66668L6.00002 12L2.66669 8.66668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
