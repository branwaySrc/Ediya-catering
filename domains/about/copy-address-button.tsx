"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/share/button";

type CopyAddressButtonProps = {
	address: string;
	className?: string;
};

async function copyToClipboard(text: string) {
	if (navigator.clipboard?.writeText) {
		await navigator.clipboard.writeText(text);
		return;
	}

	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.setAttribute("readonly", "");
	textarea.style.position = "fixed";
	textarea.style.top = "-9999px";
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}

export function CopyAddressButton({ address, className }: CopyAddressButtonProps) {
	const [copied, setCopied] = useState(false);
	const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (resetTimer.current) {
				clearTimeout(resetTimer.current);
			}
		};
	}, []);

	const handleCopy = async () => {
		await copyToClipboard(address);
		setCopied(true);

		if (resetTimer.current) {
			clearTimeout(resetTimer.current);
		}

		resetTimer.current = setTimeout(() => {
			setCopied(false);
		}, 1800);
	};

	return (
		<Button.Action
			variant="ghost"
			icon={copied ? Check : Copy}
			className={className}
			ariaLabel={copied ? "주소 복사 완료" : "주소 복사"}
			onClick={handleCopy}
		>
			{copied ? "복사 완료" : "주소 복사"}
		</Button.Action>
	);
}
