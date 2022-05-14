
import React from "react";
import PdfViewerView from "./PdfViewer.view";
import { PdfViewerContext } from "./utils/context";

export default function PdfViewerContainer({file}) {

    return (
        <PdfViewerContext.Provider
            value={{
               file
            }}
        >
            <PdfViewerView />
        </PdfViewerContext.Provider>
    );
}
