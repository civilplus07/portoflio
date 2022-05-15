
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import AboutUsView from "./AboutUs.view";
import { AboutUsContext } from "./utils/context";

export default function AboutUsContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <AboutUsContext.Provider
                value={{
                    count: count,
                }}
            >
                <AboutUsView />
            </AboutUsContext.Provider>
        </AppLayout>
    );
}
