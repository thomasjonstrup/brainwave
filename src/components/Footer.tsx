import { socials } from "@/constants";

const Footer = () => {
	return (
		<footer className="relative py-10 lg:py-16 xl:py-20 lg:py-32 xl:py-40 !px-0 !py-10">
			<div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
				<p className="caption text-n-4 lg:block">
					© 2024. All rights reserved.
				</p>

				<ul className="flex gap-5 flex-wrap" role="list">
					{socials.map((socialLink) => {
						return (
							<li role="listitem" key={`social-${socialLink.id}`}>
								<a
									className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
									href={socialLink.url}
									aria-label={socialLink.title}
								>
									<img
										src={socialLink.iconUrl}
										alt={socialLink.title}
										width={16}
										height={16}
									/>
								</a>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 pointer-events-none lg:block xl:left-10 right-10"></div>
			<div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"></div>
			<div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"></div>
		</footer>
	);
};

export default Footer;
