import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function RegisterPage() {
	return (
		<>
		<section className="flex bg-red-50 flex-col items-center justify-center gap-4 hero-section">
			<div className="inline-block px-2 text-center justify-center">
				<h1 className={title()}>Renting Vehicle made&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>easy&nbsp;</h1>
				<br />
				<h1 className={title()}>
					with Rental Sathi <span className="text-primary">.</span>
				</h1>
				<h2 className="text-2xl mt-4">
					Register today as a user or a vehicle owner to get started
				</h2>
			</div>
			<div className="flex gap-4">
				<Link href={siteConfig.links.registerAsOwner} className="bg-primary text-white px-4 py-2 rounded-full">Register as Owner</Link>
				<Link href={siteConfig.links.registerAsUser} className="border border-primary px-4 py-2 rounded-full">Register as User</Link>
			</div>
		</section>
		</>
	);
}
