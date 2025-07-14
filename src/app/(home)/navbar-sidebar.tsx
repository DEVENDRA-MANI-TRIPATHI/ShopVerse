import { on } from "events";


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

 };