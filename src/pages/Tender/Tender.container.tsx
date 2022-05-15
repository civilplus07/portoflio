
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import TenderView from "./Tender.view";
import { TenderContext } from "./utils/context";

export default function TenderContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <TenderContext.Provider
                value={{
                    count: count,
                }}
            >
                <TenderView />
            </TenderContext.Provider>
        </AppLayout>
    );
}
