
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
            href: '/dashboard'
        },
        {
            title: 'IS Code',
            active: false,
            href: '/iscode'
        },
        {
            title: 'Civil Engeneering',
            active: false,
            href: '/civilengeneering'
        },
        {
            title: 'Tender Obligations',
            active: false,
            href: '/tenderobligation'
        },
        {
            title: 'Important documents',
            active: false,
            href: '/importantdocuments'
        },
        {
            title: 'House studio drafting',
            active: false,
            href: '/homestudiodrafting'
        },
        {
            title: 'Various Exams',
            active: false,
            href: '/variousexams'
        },
        {
            title: 'About',
            active: false,
            href: '/aboutus'
        },
        {
            title: 'Contact Us',
            active: false,
            href: '/contactus'
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
