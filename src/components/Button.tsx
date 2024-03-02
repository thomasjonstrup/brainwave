import ButtonSVG from "@/assets/svg/ButtonSvg";
import { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	href?: string;
	px?: string;
	white?: boolean;
};

const Button = ({
	className,
	children,
	white = false,
	href,
	px,
	...rest
}: ButtonProps) => {
	const classes = `button relative inline-flex items-center justify-center, h-11 transition-colors hover:text-color-1 ${
		px || "px-7"
	} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

	const spanClasses = "relative z-10";

	const renderButton = () => {
		return (
			<button className={classes} {...rest}>
				<span className={spanClasses}>{children}</span>
				{ButtonSVG(white)}
			</button>
		);
	};

	const renderLink = () => {
		return (
			<a href="href" className={classes}>
				<span className={spanClasses}>{children}</span>
				{ButtonSVG(white)}
			</a>
		);
	};

	return href ? renderLink() : renderButton();
};

export default Button;
