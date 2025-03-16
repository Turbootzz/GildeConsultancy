import Link from "next/link";
import Button from "./common/buttons/Button";

export default function Information() {
	return (
		<section className="mt-12 flex flex-col bg-neutral-100">
			<h1 className="text-2xl font-bold text-neutral-900">
				Don't take our word for it. Our customers say it best.
			</h1>
			<Link href="/" className="mt-6 block">
				<Button text="Lees meer" className="w-44" />
			</Link>
			<h3 className="font-bold text-neutral-900 text-lg">Lorem, ipsum dolor sit amet consectetur</h3>
			<p className="text-neutral-900">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. adipisicing
				elit. Quisquam, quos.
			</p>
		</section>
	);
}
