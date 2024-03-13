import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, ExploreIcon } from "@/components/icons";

export default function Home() {
	return (
		<>
		<section className="flex flex-col items-center justify-center gap-4 hero-section">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Renting Vehicle made&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>easy&nbsp;</h1>
				<br />
				<h1 className={title()}>
					with Rental Sathi <span className="text-primary">.</span>
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Register today as a user or a vehicle owner to get started
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.register}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					 Register Today
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<ExploreIcon size={20} />
					Explore Vehicle
				</Link>
			</div>

			{/* <div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
		</section>
		<section className="flex flex-col items-center justify-center gap-4 section-wrapper bg-1">
		<h1 className={title()}>Our <span className={title({ color: "violet" })}>Features&nbsp;</span></h1>
			<div className="flex justify-between gap-5 py-5 px-2 w-3/4">
				<div className="w-1/3 border-primary card">
					{/* font awesome icons */}
					<div className="icons-center">
						<i>1</i>
					</div>
					<h2 className="card-title">Easy to use</h2>
					<p className="text-center">
						Our platform is easy to use and user friendly. 
					</p>
				</div>
				<div className="w-1/3 border-primary card">
					{/* font awesome icons */}
					<div className="icons-center">
						<i>1</i>
					</div>
					<h2 className="card-title">Easy to use</h2>
					<p className="text-center">
						Our platform is easy to use and user friendly. 
					</p>
				</div>
				<div className="w-1/3 border-primary card">
					{/* font awesome icons */}
					<div className="icons-center">
						<i>1</i>
					</div>
					<h2 className="card-title">Easy to use</h2>
					<p className="text-center">
						Our platform is easy to use and user friendly. 
					</p>
				</div>
			</div>
		</section>
		</>
	);
}
