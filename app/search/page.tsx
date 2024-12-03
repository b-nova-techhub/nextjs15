// Definieren des Typs für die API-Ergebnisse
type Post = {
    id: number;
    title: string;
    body: string;
};

type SearchPageProps = {
    searchParams: {
        query?: string;
    };
};

async function fetchSearchResults(query: string): Promise<Post[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`);

    if (!res.ok) {
        throw new Error('Failed to fetch search results');
    }

    const data = (await res.json()) as Post[];
    return data;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const query = searchParams.query || '';

    if (!query) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
                <h1 className="text-2xl font-bold mb-4">Search</h1>
                <p className="text-gray-500">Please enter a search term.</p>
            </div>
        );
    }

    try {
        const results = await fetchSearchResults(query);

        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
                <h1 className="text-2xl font-bold mb-4">Search Results for &#34;{query}&#34;</h1>
                {results.length > 0 ? (
                    <ul className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-4">
                        {results.map((post) => (
                            <li key={post.id} className="border-b border-gray-200 pb-4">
                                <h2 className="text-lg font-semibold">{post.title}</h2>
                                <p className="text-gray-600">{post.body}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No results found for &#34;{query}&#34;.</p>
                )}
            </div>
        );
    } catch (error) {
        console.error('Error fetching search results:', error);
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
                <h1 className="text-2xl font-bold mb-4">Error</h1>
                <p className="text-gray-500">An error occurred while fetching search results. Please try again later.</p>
            </div>
        );
    }
}
