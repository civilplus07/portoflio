
import React from "react";
import ArchitectureBox from "./component/ArchitectureBox";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <>
            <ArchitectureBox />
        </>
    );
}    
