import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
			Home
		</div>
	);
}
