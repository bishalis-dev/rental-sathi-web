import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function DashboardPage({
    params,
}: {
    params: { userType: string };
}){
	return (
		<>
		<section className="flex bg-red-50 flex-col items-center justify-center hero-section">
			<p>
                Dashboard for {params.userType}
            </p>
		</section>
		</>
	);
}
