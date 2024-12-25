import React from "react";
import { LazyLoadingTable } from "../components/common/LazyLoadingTable";

export default function About() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">Lazy Loading Table</h1>
        <LazyLoadingTable />
      </main>
    </div>
  );
}
