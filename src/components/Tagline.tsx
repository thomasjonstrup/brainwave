import { HTMLAttributes } from "react";
import brackets from "@/assets/svg/Brackets";

type TaglineProps = HTMLAttributes<HTMLDivElement>;

const Tagline = ({ className, children, ...restProps }: TaglineProps) => {
	return (
		<div
			className={`tagline flex items-center ${className || ""}`}
			{...restProps}
		>
			{brackets("left")}
			<div className="mx-3 text-n-3">{children}</div>
			{brackets("right")}
		</div>
	);
};

export default Tagline;
