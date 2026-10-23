"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "../site";

const links = navLinks.filter((link) => link.href !== "/contact");

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => setOpen(false), [pathname]);

	const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting && !open
						? "bg-transparent border-transparent"
						: "bg-white/90 dark:bg-zinc-900/90 border-zinc-200 dark:border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between gap-4 p-4 mx-auto sm:p-6">
					<Link
						href="/"
						translate="no"
						className="notranslate font-semibold font-display duration-200 text-zinc-800 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
					>
						{siteConfig.name}
					</Link>

					<nav aria-label="Main" className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								aria-current={isActive(link.href) ? "page" : undefined}
								className={`hidden md:inline duration-200 ${
									isActive(link.href)
										? "text-zinc-950 dark:text-white font-medium"
										: "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
								}`}
							>
								{link.name}
							</Link>
						))}
						<Link
							href="/contact"
							aria-current={isActive("/contact") ? "page" : undefined}
							className="px-3 py-1.5 font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
						>
							Hire me
						</Link>
						<button
							type="button"
							onClick={() => setOpen((o) => !o)}
							aria-expanded={open}
							aria-controls="mobile-menu"
							aria-label={open ? "Close menu" : "Open menu"}
							className="p-1 rounded-md md:hidden text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
						>
							{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</nav>
				</div>

				{open && (
					<nav id="mobile-menu" aria-label="Mobile" className="px-4 pb-4 md:hidden">
						<ul className="flex flex-col gap-1">
							{[{ name: "Home", href: "/" }, ...navLinks].map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										aria-current={pathname === link.href ? "page" : undefined}
										className={`block px-3 py-2 rounded-md ${
											pathname === link.href
												? "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white font-medium"
												: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
										}`}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};
