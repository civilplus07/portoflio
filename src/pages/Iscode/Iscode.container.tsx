
import React from "react";
import { AppLayout } from "../../component/AppLayout";
import IscodeView from "./Iscode.view";
import { IscodeContext } from "./utils/context";

export default function IscodeContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <IscodeContext.Provider
                value={{
                    count: count,
                }}
            >
                <IscodeView />
            </IscodeContext.Provider>
        </AppLayout>
    );
}
