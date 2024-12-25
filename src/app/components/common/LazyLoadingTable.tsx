"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { TableRow } from "./TableRow";

interface Item {
  id: number;
  name: string;
  email: string;
}

export function LazyLoadingTable() {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const loadMoreItems = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      // Simulating an API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newItems: Item[] = Array.from({ length: 10 }, (_, i) => ({
        id: items.length + i + 1,
        name: `User ${items.length + i + 1}`,
        email: `user${items.length + i + 1}@example.com`
      }));
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading more items:", error);
    } finally {
      setLoading(false);
    }
  }, [items.length, loading]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        loadMoreItems();
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loadMoreItems]);

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 border-b">ID</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Name</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div ref={loader} className="text-center py-4">
        {loading && <p>Loading more items...</p>}
      </div>
    </div>
  );
}
