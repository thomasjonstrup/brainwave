import Section from "@/components/Section";
import { roadmap } from "@/constants";

import { grid, check2, loading1 } from "@/assets/index";
import Tagline from "@/components/Tagline";
import Button from "./Button";

const Roadmap = () => {
	return (
		<Section className="overflow-hidden" id="roadmap">
			<div className="container md:pb-10">
				<div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
					{roadmap.map((roadMapItem) => {
						const status =
							roadMapItem.status === "done"
								? "Done"
								: "In progress";

						return (
							<div
								className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
									roadMapItem.colorful
										? "bg-conic-gradient"
										: "bg-n-6"
								}`}
								key={roadMapItem.id}
							>
								<div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
									<div className="absolute top-0 left-0 max-w-full">
										<img
											src={grid}
											className="w-full"
											height={550}
											width={550}
											alt="Grid"
										/>
									</div>
									<div className="relative z-1">
										<div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
											<Tagline>
												{roadMapItem.date}
											</Tagline>

											<div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
												<img
													src={
														roadMapItem.status ===
														"done"
															? check2
															: loading1
													}
													width={16}
													height={16}
													alt={status}
												/>
												<div className="tagline">
													{status}
												</div>
											</div>
										</div>
										<div className="mb-10 -my-10 -mx-15">
											<img
												src={roadMapItem.imageUrl}
												width={628}
												height={426}
												alt={roadMapItem.title}
											/>
										</div>

										<h4 className="h4 mb-4">
											{roadMapItem.title}
										</h4>
										<p className="body-2 text-n-4">
											{roadMapItem.text}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
					<Button>Our Roadmap</Button>
				</div>
			</div>
		</Section>
	);
};

export default Roadmap;
