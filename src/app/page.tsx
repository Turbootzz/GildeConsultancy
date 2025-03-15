import Image from "next/legacy/image";
import Header from "@/components/ui/Header";
import HeroSection from "../components/HeroSection";
import Information from "@/components/Information";
export default function Home() {
	return (
		<main className="relative">
			<div className="relative">

				<div className="absolute inset-0 z-0">
					<Image
						src="/images/background.webp"
						alt="Background"
						layout="fill"
						objectFit="cover"
						priority
					/>
				</div>
				
				<Header />
				<HeroSection />
			</div>
			
			<div className="bg-white">
				<Information />
			</div>
		</main>
	);
}
