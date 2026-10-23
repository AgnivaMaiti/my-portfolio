"use client";
import { Languages } from "lucide-react";
import Script from "next/script";
import React, { useEffect, useState } from "react";

// Free whole-site translation via the Google Translate website element.
// The element reads the `googtrans` cookie on load, so switching language = set cookie + reload.
// Content stays English in the HTML (what search engines and Play reviewers see).
const languages = [
	{ code: "en", name: "English" },
	{ code: "hi", name: "हिन्दी" },
	{ code: "bn", name: "বাংলা" },
	{ code: "as", name: "অসমীয়া" },
	{ code: "or", name: "ଓଡ଼ିଆ" },
	{ code: "ta", name: "தமிழ்" },
	{ code: "te", name: "తెలుగు" },
	{ code: "es", name: "Español" },
	{ code: "fr", name: "Français" },
	{ code: "de", name: "Deutsch" },
	{ code: "pt", name: "Português" },
	{ code: "ja", name: "日本語" },
	{ code: "zh-CN", name: "中文" },
	{ code: "ar", name: "العربية" },
];

declare global {
	interface Window {
		googleTranslateElementInit?: () => void;
		google?: any;
	}
}

const readLang = () => {
	const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/);
	return match ? decodeURIComponent(match[1]) : "en";
};

const writeLang = (code: string) => {
	const host = window.location.hostname;
	// The element may have set the cookie on the bare domain too; clear both before writing.
	const domains = ["", host, `.${host.replace(/^www\./, "")}`];
	for (const d of domains) {
		const domain = d ? `; domain=${d}` : "";
		document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
	}
	if (code !== "en") {
		document.cookie = `googtrans=/en/${code}; path=/`;
	}
	window.location.reload();
};

export const LanguageSwitcher: React.FC = () => {
	const [lang, setLang] = useState("en");
	// Only inject the script once the callback it names exists.
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setLang(readLang());
		window.googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: "en",
					includedLanguages: languages.map((l) => l.code).join(","),
					autoDisplay: false,
				},
				"google_translate_element",
			);
		};
		setReady(true);
	}, []);

	return (
		<>
			<div id="google_translate_element" className="hidden" aria-hidden="true" />
			<label className="notranslate flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-full border shadow-sm backdrop-blur bg-white/90 border-zinc-300 text-zinc-700 dark:bg-zinc-900/90 dark:border-zinc-700 dark:text-zinc-300">
				<Languages className="w-4 h-4" aria-hidden="true" />
				<span className="sr-only">Language</span>
				<select
					value={lang}
					onChange={(e) => writeLang(e.target.value)}
					className="bg-transparent outline-none cursor-pointer"
					translate="no"
				>
					{languages.map((l) => (
						<option key={l.code} value={l.code} className="text-zinc-900">
							{l.name}
						</option>
					))}
				</select>
			</label>
			{ready && (
				<Script
					src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
					strategy="afterInteractive"
				/>
			)}
		</>
	);
};
