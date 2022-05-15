
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import ContactUsView from "./ContactUs.view";
import { ContactUsContext } from "./utils/context";

export default function ContactUsContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <ContactUsContext.Provider
                value={{
                    count: count,
                }}
            >
                <ContactUsView />
            </ContactUsContext.Provider>
        </AppLayout>
    );
}
