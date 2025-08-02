'use client'
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";



import React from 'react';
export default function Home() {
    const searchParams = useSearchParams();
    const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>

      <div className="Home">
        <div className="name">
          <button type="button" onClick={() => router.push('/')}>
            home
          </button>
          <div>
            path is <span className="path">{pathname}</span>
            <br />
            slug is <span className="slug">{params.slug}</span>
            <br />
            search params are {searchParams.get('search')} and {searchParams.get('page')}
            {/* http://localhost:3000/blogpost/cs?search=aditya&page=bhise */}
          </div>
        </div>

      </div>

    </>
  );
}
