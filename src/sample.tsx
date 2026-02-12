// components/navbar/navbar.tsx
"use client";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>My App</h1>
      <div>
        {status === "loading" ? (
          <span>Checking session...</span>
        ) : session ? (
          <div className="flex gap-4 items-center">
            <span>{session.user?.name}</span>
            {/* Backend theke asha role check */}
            <span className="bg-blue-500 px-2 rounded text-xs">
              {session.user?.role}
            </span>
          </div>
        ) : (
          <button>Login</button>
        )}
      </div>
    </nav>
  );
}