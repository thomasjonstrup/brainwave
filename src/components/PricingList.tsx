import Button from "@/components/Button";
import { pricing } from "@/constants";

import { check } from "@/assets";

const PricingList = () => {
	return (
		<div className="flex gap-[1rem] max-lg:flex-wrap">
			{pricing.map((pricingItem) => {
				return (
					<div className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
						<h4 className="h4 mb-4">{pricingItem.title}</h4>

						<p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
							{pricingItem.description}
						</p>

						<Button
							className="w-full mb-6"
							white={!!pricingItem.price}
							href={
								pricingItem.price
									? "/pricing"
									: "mailto:contact@jsmastery.pro"
							}
						>
							{pricingItem.price ? "Get started" : "Contact us"}
						</Button>

						<ul role="list">
							{pricingItem.features.map((feature, index) => {
								return (
									<li
										className="flex items-start py-5 border-t border-n-6"
										key={index}
									>
										<img
											src={check}
											width={24}
											height={24}
											alt="Check"
										/>
										<p className="body-2 ml-4">{feature}</p>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default PricingList;
