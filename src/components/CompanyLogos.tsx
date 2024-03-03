import { companyLogos } from "@/constants";

type CompanyLogosProps = {
	className?: string;
};

const CompanyLogos = ({ className }: CompanyLogosProps) => {
	return (
		<div className={className ?? ""}>
			<h2 className="tagline mb-6 text-center text-n-1/50">
				Helping people create beautiful content at
			</h2>
			<ul className="flex" role="list">
				{companyLogos.map((logo, index) => {
					return (
						<li
							className="flex items-center justify-center flex-1 h-[8.5rem]"
							key={index}
						>
							<img
								src={logo}
								width={134}
								height={28}
								alt={logo}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CompanyLogos;
