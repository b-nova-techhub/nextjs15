import React from 'react';
import { unstable_after as after } from 'next/server';

export default function UnstableAfterExample({ children }: { children: React.ReactNode }) {
    const responseTimestamp = new Date().toISOString();

    after(() => {
        const afterTimestamp = new Date().toISOString();
        console.log("Rsponse: ", responseTimestamp)
        // console.log(children)
        console.log('Secondary task executed:', afterTimestamp);
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    `unstable_after` Example
                </h1>
                <p className="text-gray-600">
                    <strong>Response Timestamp:</strong> {responseTimestamp}
                </p>
                <p className="text-gray-500 mt-2">
                    Check the console for the timestamp of the secondary task.
                </p>
            </div>
        </div>
    );
}
