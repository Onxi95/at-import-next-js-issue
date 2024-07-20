"use client";

import { useRouter } from "next/navigation";
import { Component } from "./@/component";

export default function OtherPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <main>
      <h1>Other Page</h1>
      <Component />
      <button onClick={handleClick}>revalidate</button>
    </main>
  );
}
