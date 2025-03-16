"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="absolute top-0 left-0 z-10 flex w-full items-center justify-between bg-transparent px-6 py-4">
			<div className="flex items-center">
				<Link href="/">
					<div className="flex cursor-pointer items-center">
						<div className="relative h-12 w-40 lg:w-64">
							<Image
								src="/images/logo.webp"
								alt="Gilde Consultancy Logo"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</Link>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden items-center space-x-8 md:flex">
				<Link href="/" className="text-blue-300 hover:text-white">
					Home
				</Link>
				<Link href="/wat-we-doen" className="text-white hover:text-blue-300">
					Wat we doen
				</Link>
				<div className="group relative">
					<Link
						href="/onze-diensten"
						className="flex items-center text-white hover:text-blue-300"
					>
						Onze diensten
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="ml-1 h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</Link>
				</div>
				<Link href="/updates" className="text-white hover:text-blue-300">
					Updates
				</Link>
				<Link
					href="/contact"
					className="rounded-md border border-blue-300 px-4 py-2 text-white hover:bg-blue-800"
				>
					Contact
				</Link>
			</div>

			{/* Mobile Navigation Button */}
			<div className="md:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-white focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			{isOpen && (
				<div className="absolute top-16 right-0 w-full bg-gray-800 shadow-md md:hidden">
					<div className="flex flex-col items-center py-4">
						<Link href="/" className="py-2 text-blue-300">
							Home
						</Link>
						<Link href="/wat-we-doen" className="py-2 text-white">
							Wat we doen
						</Link>
						<Link href="/onze-diensten" className="py-2 text-white">
							Onze diensten
						</Link>
						<Link href="/updates" className="py-2 text-white">
							Updates
						</Link>
						<Link
							href="/contact"
							className="mt-2 rounded-md border border-blue-300 px-4 py-2 text-white"
						>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
