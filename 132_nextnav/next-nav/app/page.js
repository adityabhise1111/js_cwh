'use client'
import { usePathname, useRouter } from "next/navigation";


import React from 'react';
export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>

      <div className="Home">
        <div className="name">
          <button type="button" onClick={() => router.push('/contact')}>
            contact
          </button>
          <div>
            path is <span className="path">{pathname}</span>
          </div>
        </div>

      </div>

    </>
  );
}
