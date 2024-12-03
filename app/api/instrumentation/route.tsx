import { NextResponse } from 'next/server';

type ErrorResponse = {
    error: string;
};

type SuccessResponse = {
    message: string;
};

export async function GET(): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
    try {
        throw new Error('Something went wrong!');
    } catch (err) {
        if (err instanceof Error) {
            console.error('Error in API Route:', err.message);
            return NextResponse.json(
                { error: err.message },
                { status: 500 }
            );
        }

        console.error('Unexpected error:', err);
        return NextResponse.json(
            { error: 'An unexpected error occurred.' },
            { status: 500 }
        );
    }

    return NextResponse.json({ message: 'This will never be reached' });
}
