"use client";

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

import { useState } from "react";

export const QueryProvider =({
    children
}: {
    children: React.ReactNode;
}) =>{

    const [querryClient] = useState(()=> new QueryClient());

    return (
        <QueryClientProvider client={querryClient}>
            {children}
        </QueryClientProvider>
    )
}