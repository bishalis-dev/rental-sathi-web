import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Register",
        template: "%s - Register",
    },
    description: "Register as a user or a vehicle owner to get started",
};
export default function RegisterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}
