import { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <div className="selection:bg-[hsl(320,65%,52%,20%)]">
            
            <NavBar /> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?
            {children}
        </div>
    );
}
