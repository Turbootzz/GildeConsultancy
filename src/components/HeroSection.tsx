const HeroSection = () => {
	return (
		<div className="relative flex h-screen items-center justify-center">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/90">
				{/* Background image will be set in page.tsx */}
			</div>

			<div className="z-10 mx-auto max-w-4xl px-4 text-center">
				<h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">Gilde Consultancy</h1>
				<p className="text-xl text-white md:text-2xl">
					Wij koppelen de juist passende interim professional aan
					<br />
					uitdagende opdrachten bij onze opdrachtgevers.
				</p>

				<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="/team"
						className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
					>
						Ons team
					</a>
					<a
						href="/informatie"
						className="rounded border border-white bg-transparent px-6 py-3 text-white hover:bg-white/10"
					>
						Meer informatie
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
