// import { on } from "events";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area"
import { sign } from "crypto";


interface NavbarItem {
    href: string;
    label: React.ReactNode;
}


interface NavbarSidebarProps {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({
    items,
    open,
    onOpenChange,
}: NavbarSidebarProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader className="p-4 border-b">
                    
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium"
                            onClick={()=>onOpenChange(false)}

                        >
                           {item.label} 
                        </Link>
                    ))}
                    <div className="border-t">
                        <Link onClick={()=>onOpenChange(false)} href="/sign-in" className="w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium">
                            Log-in
                        </Link>
                        <Link onClick={()=>onOpenChange(false)} href="/sign-up" className="w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium">
                            Start selling
                        </Link>
                    </div>
                </ScrollArea>
                
            </SheetContent>
        </Sheet>
    )
 };