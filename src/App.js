import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";


const queryClient = new QueryClient();

export default function App() {

  return (
    <div>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}
