
import React from "react";
import AppLayoutView from "./AppLayout.view";
import { AppLayoutContext } from "./utils/context";

export default function AppLayoutContainer({ children }: { children: React.ReactNode }) {
    const [count, setCount] = React.useState(1);
    const variants = {
        open: { display: 'inherit', x: 0 },
        closed: { display: 'none', x: "-100%" },
    }
    const [show, setShow] = React.useState(false)
    const items = [
        {
            title: 'HOME',
            active: false,
            href: '#home'
        },
        {
            title: 'IS Code',
            active: false,
            href: '#about'
        },
        {
            title: 'Civil Engeneering',
            active: false,
            href: '#portfolio'
        },
        {
            title: 'Tender Obligations',
            active: false,
            href: '#blog'
        },
        {
            title: 'Important documents',
            active: false,
            href: '#contact'
        },
        {
            title: 'House studio drafting',
            active: false,
            href: '#contact'
        },
        {
            title: 'Various Exams',
            active: false,
            href: '#contact'
        },
        {
            title: 'About',
            active: false,
            href: '#contact'
        },
        {
            title: 'Contact Us',
            active: false,
            href: '#contact'
        },
    ]
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
