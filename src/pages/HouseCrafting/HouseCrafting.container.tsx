
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import HouseCraftingView from "./HouseCrafting.view";
import { HouseCraftingContext } from "./utils/context";

export default function HouseCraftingContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <HouseCraftingContext.Provider
                value={{
                    count: count,
                }}
            >
                <HouseCraftingView />
            </HouseCraftingContext.Provider>
        </AppLayout>
    );
}
