
import React from "react";
import VariousExamView from "./VariousExam.view";
import { VariousExamContext } from "./utils/context";
import { AppLayout } from "../../component/AppLayout";

export default function VariousExamContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <VariousExamContext.Provider
                value={{
                    count: count,
                }}
            >
                <VariousExamView />
            </VariousExamContext.Provider>
        </AppLayout>
    );
}
