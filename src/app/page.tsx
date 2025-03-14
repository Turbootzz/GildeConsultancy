import Image from "next/image";
import Header from "@/components/ui/Header";
import HeroSection from "../components/HeroSection";

export default function Home() {
	return (
		<main className="relative min-h-screen">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/background.jpg"
					alt="Background"
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>

			<Header />
			<HeroSection />
		</main>
	);
}
