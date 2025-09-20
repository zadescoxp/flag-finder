"use client";

import Image from "next/image";

export default function Home() {

  const handleClick = async () => {
    const res1 = await fetch("/api/flag1");
    const res2 = await fetch("/api/flag2");
    const res3 = await fetch("/api/flag3");
    const res4 = await fetch("/api/flag4");
    const res5 = await fetch("/api/flag5");
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center h-screen w-screen">
      <h1>You don&apos;t have to leave this site</h1>

      <h2>The flag is here in the site itself</h2>
      <p>To find the flag, you have to first find the tab where it is hidden. So below are the hints to get the to tab and the flag:</p>
      <ul>
        <li>check the console tabs</li>
      </ul>
      <button onClick={handleClick}>Get Flag</button>
    </div>
  );
}
