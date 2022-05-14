
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import CivilEngeneeringView from "./CivilEngeneering.view";
import { CivilEngeneeringContext } from "./utils/context";

export default function CivilEngeneeringContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <CivilEngeneeringContext.Provider
                value={{
                    count: count,
                }}
            >
                <CivilEngeneeringView />
            </CivilEngeneeringContext.Provider>
        </AppLayout>
    );
}
