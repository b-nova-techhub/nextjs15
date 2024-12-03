'use client'

// import { headers } from "next/headers";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function Home() {
  // const headerValues = headers();
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Dynamischer Inhalt nach der Hydration
    setTimestamp(new Date().toISOString());
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center">
      <Image
        src="/assets/b_nova_logo.png"
        alt="b-nova logo"
        width={150}
        height={50}
        priority
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to our new Techup
      </h1>
      <p className="text-lg text-gray-700">
        Get ready to explore the latest in technology and innovation.
      </p>

      <div>
        <h1>Hydration Error Beispiel</h1>
        <p>Serverseitiger Zeitstempel: {new Date().toISOString()}</p>
        <p>Clientseitiger Zeitstempel: {timestamp}</p>
      </div>
    </div>
  );
}
