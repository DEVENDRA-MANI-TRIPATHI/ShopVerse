import { Footer } from "./footer";
import { Navbar } from "./navbar";
interface Props{
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 bg-[#F4F4F0]">
                {children}
            </div>
            
            <Footer/>
        </div>
    );
}


export default Layout;