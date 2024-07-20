"use client";

import { useRouter } from "next/navigation";
import { revalidateRootPath } from "./@/revalidate";

export default function OtherPage() {
  const router = useRouter();

  const handleClick = () => {
    revalidateRootPath();
    router.push("/");
  };

  return (
    <main>
      <h1>Other Page</h1>
      <button onClick={handleClick}>revalidate</button>
    </main>
  );
}
