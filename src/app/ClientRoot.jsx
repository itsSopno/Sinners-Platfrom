"use client";

import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "./navbar/navbar";
import Loading from "./Loading/page";
import { AppProvider } from "../contexts/AppContext";

export default function ClientRoot({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <SessionProvider>
      <AppProvider>
        <Navbar />
        {children}
      </AppProvider>
    </SessionProvider>
  );
}
