
import React from "react";
import ArchitectureBox from "./component/ArchitectureBox";
import { Carousel } from "./component/Carousel";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <>
            <Carousel />
            <ArchitectureBox />
        </>
    );
}    
