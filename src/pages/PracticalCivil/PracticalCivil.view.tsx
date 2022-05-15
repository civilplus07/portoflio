
import React from "react";
import { usePracticalCivilContext } from "./utils/context";

export default function PracticalCivilView() {
    const { count } = usePracticalCivilContext();
    return <p>PracticalCivil View and count is {count}</p>;
}    
