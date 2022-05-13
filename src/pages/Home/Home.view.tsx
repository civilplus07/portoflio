
import React from "react";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return <p>Home View and count is {count}</p>;
}    
