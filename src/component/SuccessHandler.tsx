import { createStandaloneToast, theme } from "@chakra-ui/react";
import React from "react";

const toast = createStandaloneToast({ theme });

export function successHandler(msg) {
    toast.closeAll();
    toast({
        title: "",
        description: msg,
        status: "success",
        variant: "subtle",
        isClosable: true,
        position: "top-right",
    });
}