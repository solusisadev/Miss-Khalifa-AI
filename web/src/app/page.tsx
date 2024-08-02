"use client";

import React, { useState, useEffect } from "react";
import {
	ArrowRight,
	Moon,
	Sun,
	Menu,
	Heart,
	Shield,
	Book,
	User,
	MessageCircle,
	Lock,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const fadeIn = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5 } },
	};

	if (!mounted) return null;

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={darkMode ? "dark" : "light"}
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={fadeIn}
				className={`min-h-screen ${
					darkMode ? "bg-[#0f0721]" : "bg-gray-50"
				} text-neutral-100 flex flex-col justify-between font-sans transition-all duration-500`}
			>
				<header
					className={`p-6 ${
						darkMode
							? "bg-gradient-to-r from-[#190933] to-[#2d1854]"
							: "bg-gradient-to-r from-white to-purple-50"
					} shadow-lg`}
				>
					<div className="max-w-7xl mx-auto flex justify-between items-center">
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
						>
							Miss Khalifa AI
						</motion.h1>
						<nav className="hidden md:flex items-center space-x-6">
							<ul className="flex space-x-6 text-base">
								<motion.li whileHover={{ scale: 1.1 }}>
									<Link
										href="#features"
										className={`${
											darkMode
												? "text-gray-200 hover:text-pink-400"
												: "text-gray-800 hover:text-purple-600"
										} font-medium`}
									>
										Features
									</Link>
								</motion.li>
								<motion.li whileHover={{ scale: 1.1 }}>
									<Link
										href="#contact"
										className={`${
											darkMode
												? "text-gray-200 hover:text-pink-400"
												: "text-gray-800 hover:text-purple-600"
										} font-medium`}
									>
										Contact
									</Link>
								</motion.li>
							</ul>
							<motion.button
								whileTap={{ scale: 0.95 }}
								onClick={() => setDarkMode(!darkMode)}
								className={`p-2 rounded-full ${
									darkMode ? "bg-purple-800" : "bg-purple-100"
								}`}
							>
								{darkMode ? (
									<Sun className="text-yellow-400 h-5 w-5" />
								) : (
									<Moon className="text-purple-600 h-5 w-5" />
								)}
							</motion.button>
						</nav>
						<button
							className={`md:hidden ${
								darkMode ? "text-white" : "text-gray-800"
							}`}
							onClick={toggleMobileMenu}
						>
							<Menu className="h-6 w-6" />
						</button>
					</div>
				</header>

				<AnimatePresence>
					{mobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className={`md:hidden ${
								darkMode ? "bg-[#190933]" : "bg-white"
							} shadow-lg`}
						>
							<nav className="flex flex-col items-center py-6 space-y-4">
								<Link
									href="#features"
									className={`${
										darkMode
											? "text-gray-200 hover:text-pink-400"
											: "text-gray-800 hover:text-purple-600"
									} text-lg font-medium`}
								>
									Features
								</Link>
								<Link
									href="#contact"
									className={`${
										darkMode
											? "text-gray-200 hover:text-pink-400"
											: "text-gray-800 hover:text-purple-600"
									} text-lg font-medium`}
								>
									Contact
								</Link>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>

				<main className="flex-grow flex items-center p-6 md:p-12">
					<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="text-left"
						>
							<h2 className="text-5xl md:text-6xl font-bold mb-6">
								<span className="text-pink-400">UI/UX</span>{" "}
								<span className="text-purple-300">DESIGN</span>
							</h2>
							<p
								className={`text-xl mb-8 ${
									darkMode ? "text-gray-300" : "text-gray-700"
								}`}
							>
								Your friendly Sex Health AI chatbot created and operated by Pink
								Panthers. Get answers to all your questions in a fun and
								engaging way!
							</p>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link href="/chat" passHref>
									<motion.button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out hover:from-pink-600 hover:to-purple-700 hover:shadow-lg">
										Start Chatting Now
										<ArrowRight className="ml-2 h-6 w-6 inline" />
									</motion.button>
								</Link>
							</motion.div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="relative"
						>
							<div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl h-80 md:h-full w-full opacity-20"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<svg
									className="w-3/4 h-3/4"
									viewBox="0 0 200 200"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill={darkMode ? "#6B46C1" : "#9F7AEA"}
										d="M45.7,-78.3C58.9,-71.1,69.2,-58.3,76.4,-44.1C83.6,-29.9,87.8,-14.9,87.8,0C87.8,14.9,83.7,29.8,76.4,43.8C69.2,57.8,58.9,71,45.6,78.5C32.3,86,16.2,87.9,0.1,87.7C-15.9,87.5,-31.8,85.3,-45.7,77.8C-59.6,70.3,-71.5,57.5,-78.6,43C-85.7,28.5,-88,14.3,-87.4,0.3C-86.9,-13.6,-83.5,-27.2,-76.4,-39.7C-69.2,-52.2,-58.3,-63.6,-45.3,-70.9C-32.2,-78.3,-16.1,-81.6,0.3,-82.1C16.7,-82.6,33.5,-80.3,45.7,-78.3Z"
										transform="translate(100 100)"
									/>
								</svg>
								<div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
									AI
								</div>
							</div>
						</motion.div>
					</div>
				</main>

				<section
					id="features"
					className={`${darkMode ? "bg-[#241242]" : "bg-purple-50"} py-16`}
				>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="max-w-7xl mx-auto text-left px-6"
					>
						<h3 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
							Awesome Features
						</h3>
						<ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									text: "Get answers to sensitive questions",
									icon: <MessageCircle className="h-8 w-8" />,
								},
								{
									text: "Learn about safe practices",
									icon: <Shield className="h-8 w-8" />,
								},
								{
									text: "Explore relationships and emotions",
									icon: <Heart className="h-8 w-8" />,
								},
								{
									text: "Understand your body better",
									icon: <User className="h-8 w-8" />,
								},
								{
									text: "Access reliable health information",
									icon: <Book className="h-8 w-8" />,
								},
								{
									text: "Chat anonymously and safely",
									icon: <Lock className="h-8 w-8" />,
								},
							].map((feature, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									whileHover={{
										scale: 1.05,
										boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
									}}
									className={`flex flex-col items-center p-6 rounded-xl ${
										darkMode
											? "bg-[#2d1854] text-gray-200"
											: "bg-white text-gray-800"
									}`}
								>
									<div className="text-pink-500 mb-4">{feature.icon}</div>
									<span className="text-center font-medium">
										{feature.text}
									</span>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</section>

				<footer
					id="contact"
					className={`${
						darkMode ? "bg-[#190933] border-t border-purple-800" : "bg-gray-800"
					} text-white py-12`}
				>
					<div className="max-w-7xl mx-auto text-center px-6">
						<p className="text-2xl font-bold mb-6">
							© 2024 Miss Khalifa AI. All rights reserved.
						</p>
						<p className="text-xl mb-8">
							Got questions? Hit us up at:{" "}
							<a
								href="mailto:support@misskhalifa.ai"
								className="underline hover:text-pink-300 transition duration-300"
							>
								support@misskhalifa.ai
							</a>
						</p>
						<div className="flex justify-center space-x-6">
							{/* Add social media icons here */}
						</div>
					</div>
				</footer>
			</motion.div>
		</AnimatePresence>
	);
};

export default HomePage;
