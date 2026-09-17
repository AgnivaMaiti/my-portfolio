"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const links = [
	{ name: "Projects", href: "/projects", mobile: true },
	{ name: "Skills", href: "/skills", mobile: false },
	{ name: "About", href: "/about", mobile: false },
	{ name: "Resume", href: "/resume", mobile: true },
];

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-transparent border-transparent"
						: "bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between gap-4 p-4 mx-auto sm:p-6">
					<nav aria-label="Main" className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`${link.mobile ? "" : "hidden sm:inline "}duration-200 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100`}
							>
								{link.name}
							</Link>
						))}
						<Link
							href="/contact"
							className="px-3 py-1.5 font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
						>
							Hire me
						</Link>
					</nav>

					<Link
						href="/"
						aria-label="Home"
						className="duration-200 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
