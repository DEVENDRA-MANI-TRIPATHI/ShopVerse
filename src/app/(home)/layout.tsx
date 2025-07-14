import { Navbar } from "./navbar";
interface Props{
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
        </div>
    );
}


export default Layout;