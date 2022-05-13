
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import HomeView from "./Home.view";
import { HomeContext } from "./utils/context";

export default function HomeContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <HomeContext.Provider
                value={{
                    count: count,
                }}
            >
                <HomeView />
            </HomeContext.Provider>
        </AppLayout>
    );
}
