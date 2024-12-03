import { registerOTel } from '@vercel/otel'

export async function onRequestError(
	err,
	request,
	context
) {
	console.error('Error captured:', {
		message: err.message,
		request: {
			method: request.method,
			url: request.url,
		},
		context,
	});

	await fetch('https://your-observability-service.example.com/report', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			error: {
				message: err.message,
				stack: err.stack,
			},
			request: {
				method: request.method,
				url: request.url,
				headers: Object.fromEntries(request.headers.entries()),
			},
			context,
		}),
	});
}

export async function register() {
	registerOTel('next-app')
	console.log('Observability SDK initialized');
}