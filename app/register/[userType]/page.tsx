import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function RegisterAsPage({ params }: { params: { userType: string } }) {
	return (
		<>
        <h1>Register Today as: <span className="capitalize">{params.userType}</span></h1>
		</>
	);
}
