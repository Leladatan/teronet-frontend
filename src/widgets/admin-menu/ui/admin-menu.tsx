'use client';

import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { navItems } from '@/widgets/admin-menu/const';

import Link from 'next/link';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/components/ui/sheet';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const AdminMenu = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <aside className="hidden md:flex w-64 flex-col border-r-2 h-screen-70px">
        <ScrollArea className="flex-1 py-6">
          <nav className="grid gap-1 px-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </span>
                {pathname === item.href && (
                  <ChevronRight className="relative z-10 ml-auto h-4 w-4" />
                )}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden absolute left-4 top-20 z-40">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 h-screen">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <ScrollArea className="flex-1 py-2">
            <nav className="grid gap-1 px-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  )}
                >
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeMobileNav"
                      className="absolute inset-0 bg-primary rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </span>
                  {pathname === item.href && (
                    <ChevronRight className="relative z-10 ml-auto h-4 w-4" />
                  )}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AdminMenu;
