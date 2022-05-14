
import React from "react";
import { items } from "../../utils/AppLayout/AppItem";
import AppLayoutView from "./AppLayout.view";
import { AppLayoutContext } from "./utils/context";

export default function AppLayoutContainer({ children }: { children: React.ReactNode }) {
    const [count, setCount] = React.useState(1);
    const variants = {
        open: { display: 'inherit', x: 0 },
        closed: { display: 'none', x: "-100%" },
    }
    const [show, setShow] = React.useState(false)
    
    return (
        <AppLayoutContext.Provider
            value={{
                variants, setShow, show, items, children
            }}
        >
            <AppLayoutView />
        </AppLayoutContext.Provider>
    );
}
