import {testActionId} from "@/app/action-id/action";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Search
                </h1>
                <form action={testActionId} className="space-y-4">
                    <div>
                        <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                            Enter your query
                        </label>
                        <input
                            id="query"
                            name="query"
                            type="text"
                            placeholder="Type something..."
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}
