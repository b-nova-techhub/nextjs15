import React from 'react';
import { headers } from 'next/headers';
import {fetchPost, Post} from "@/app/service/postService";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const post = await fetchPost(resolvedParams.id);

    return {
        title: `Post: ${post.title}`,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const post: Post = await fetchPost(resolvedParams.id);

    const headerValues = headers();
    console.log(headerValues);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-xl w-full">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <p className="text-gray-700 mb-6">{post.body}</p>
                <p className="text-sm text-gray-500">
                    <strong>Post ID:</strong> {post.id}
                </p>
            </div>
        </div>
    );
}
