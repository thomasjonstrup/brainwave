import Section from "@/components/Section";
import curve from "@/assets/hero/curve.png";
import robot from "@/assets/hero/robot.jpg";
import heroBackground from "@/assets/hero/hero-background.jpg";
import Button from "@/components/Button";
import {
	BackgroundCircles,
	BottomLine,
	Gradient,
} from "@/components/design/Hero";
import Generating from "@/components/Generating";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "@/constants";
import CompanyLogos from "@/components/CompanyLogos";
import Notification from "@/components/Notification";

const Hero = () => {
	return (
		<Section
			className="pt-[12rem] mt-[5.25rem]"
			crosses
			crossesOffset="lg:translate-y-[5.25rem]"
			customPadding=""
			id="hero"
		>
			<div className="container relative">
				<div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
					<h1 className="h1 mb-6">
						Explore the Possibilities of AI Chatting with
						<span className="inline-block relative">
							Brainwave{" "}
							<img
								src={curve}
								className="absolute top-full left-0 w-full xl:mt-2"
								alt="Curve"
								width={624}
								height={28}
							/>
						</span>
					</h1>
					<p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
						Unleash the power of AI within Brainwave. Upgrade your
						productivity with Brainwave, the open AI chat app.
					</p>
					<Button href="/pricing" white>
						Get Started
					</Button>
				</div>
				<div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
					<div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
						<div className="relative bg-n-8 rounded-[1rem]">
							<div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
							<div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
								<img
									src={robot}
									width={1440}
									height={490}
									className="w-full"
									alt="Robot hero image"
								/>

								<Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

								<ScrollParallax isAbsolutelyPositioned>
									<ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
										{heroIcons.map((icon, index) => (
											<li className="p-5" key={index}>
												<img
													src={icon}
													width={24}
													height={25}
													alt={icon}
												/>
											</li>
										))}
									</ul>
								</ScrollParallax>

								<ScrollParallax isAbsolutelyPositioned>
									<Notification
										className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
										title="Code generation"
									/>
								</ScrollParallax>
							</div>
						</div>

						<Gradient />
					</div>
					<div className="absolute -top-[54%] left-1/2 w-[234%] translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
						<img
							src={heroBackground}
							width={1440}
							height={1800}
							className="w-full"
							alt="hero background"
						/>
					</div>

					<BackgroundCircles />
				</div>

				<CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
			</div>

			<BottomLine />
		</Section>
	);
};

export default Hero;
