/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// MY_QUEUE: Queue;
}
// body header query params were in express 
export default {
	// request gives us access to the request object like body header query params
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};