'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Bell, Menu, User, GraduationCap } from 'lucide-react'
import LogoutButton from '../auth/LogoutBtn'
import { useAppSelector } from '@/store/hooks'


export function Navbar() {

  const role = useAppSelector((state) => state.auth.role);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left Section: Mobile Menu + Logo */}
        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3 ml-14 lg:ml-0">
            <div className="p-2 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient">
                Task Flow
              </h1>
              <p className="text-xs text-muted-foreground">Student Portal</p>
            </div>
          </div>
        </div>

        {/* Right Section: Notifications + User Menu */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 hover:bg-red-600 rounded-full">
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-2xl hover:bg-primary/10 transition-colors">
                <Avatar className="h-10 w-10 ring-2 ring-primary/20 rounded-2xl">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Student" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-medium rounded-2xl">
                    {role?.slice(0,2)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 glass-effect border-border/50 rounded-2xl shadow-2xl" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-foreground">Student Name</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    student@university.edu
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="hover:bg-primary/10 rounded-xl transition-colors">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="hover:bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl transition-colors">
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

