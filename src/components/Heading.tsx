import Tagline from "@/components/Tagline";
import { HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLDivElement> & {
	title?: string;
	tag?: string;
	text?: string;
};

const Heading = ({
	className,
	title,
	text,
	tag,
	...restProps
}: HeadingProps) => {
	return (
		<div
			className={`${
				className ?? ""
			} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
			{...restProps}
		>
			{tag ? (
				<Tagline className="mb-4 md:justify-center">{tag}</Tagline>
			) : null}
			{title ? <h2 className="h2">{title}</h2> : null}
			{text ? <p className="body-2 mt-4 text-n-4">{text}</p> : null}
		</div>
	);
};

export default Heading;
