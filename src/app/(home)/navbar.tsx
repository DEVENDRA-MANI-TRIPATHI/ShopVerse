'use client';
import Link from "next/link";
import { Poppins } from "next/font/google"


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";


const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["700"]
});

interface NavbarItemProps {
    href: string;
    label: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ isActive, href, label }: NavbarItemProps) => {
    return (
        <Button
            asChild
            variant="outline"
            className={cn(
                "bg-transparent hover:bg-transparent rounded-full hover:border-black border-transparent px-3.5 text-lg",isActive &&"bg-black hover:text-white hover:bg-black text-white",
                
            )}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};

const NavbarItems = [
    {
        href: "/",
        label: "Home",
        isActive: true,
    },
    {
        href: "/about",
        label: "about",
        isActive: false,
    },
    {
        href: "/features",
        label: "Features",
        isActive: false,
    },
    {
        href: "/pricing",
        label: "Pricing",
        isActive: false,
    },
    {
        href: "/contact",
        label: "Contact Us",
        isActive: false,
    },
]

const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  return ( 
      <nav className="h-20 flex border-b justify-between font-medium bg-white shadow-md ">
          <Link className="pl-6 flex items-center" href="/">
              <span className={cn("text-5xl font-semibold ",PoppinsFont.className)}>
                  shopverse
              </span>
          </Link>

          <NavbarSidebar
              items={NavbarItems}
              open={isSidebarOpen}
              onOpenChange={setSidebarOpen}  
          />

          <div className="items-center gap-4 hidden lg:flex">
              {NavbarItems.map((item) => (
                  <NavbarItem
                      key={item.href}
                      href={item.href}
                      isActive={pathname === item.href}
                      label={item.label}
                  />
              ))}
          </div>
          <div className="hidden lg:flex ">
              <Button
                  asChild
                  className="border-l border-t-0 border-b-0 border-r-0 rounded-none px-12 h-full text-lg bg-white hover:bg-pink-400 transition-colors">
                  <Link href="/sign-in">Login</Link>
              </Button>
              <Button
                  asChild
                  className="border-l border-t-0 border-b-0 border-r-0 rounded-none px-12 h-full text-lg bg-black text-white hover:bg-pink-400 hover:text-black transition-colors"
              >
                  <Link href="/sign-up">Start selling</Link>
              </Button>
          </div>
          <div className="flex lg:hidden items-center justify-center">
              <Button
                  variant="ghost"
                  className="size-12 border-transparent bg-white"
                  onClick={()=>setSidebarOpen(true)}
              >
                  <MenuIcon/>
              </Button>
          </div>
      </nav>

  )
}

export { Navbar }