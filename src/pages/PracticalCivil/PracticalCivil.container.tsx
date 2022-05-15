
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import PracticalCivilView from "./PracticalCivil.view";
import { PracticalCivilContext } from "./utils/context";

export default function PracticalCivilContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <PracticalCivilContext.Provider
                value={{
                    count: count,
                }}
            >
                <PracticalCivilView />
            </PracticalCivilContext.Provider>
        </AppLayout>
    );
}
