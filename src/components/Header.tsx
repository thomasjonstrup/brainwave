import { useState } from "react";
import { useLocation } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { brainwave } from "@/assets";

import { navigation } from "@/constants";
import Button from "./Button";

import MenuSVG from "@/assets/svg/MenuSvg";

import { HamburgerMenu } from "./design/Header";

const Header = () => {
	const location = useLocation();
	const [openNavigation, setOpenNavigation] = useState<boolean>(false);

	const handleToggleNavigation = () => {
		setOpenNavigation((prevOpen) => {
			if (!prevOpen) {
				disablePageScroll();
			} else {
				enablePageScroll();
			}

			return !prevOpen;
		});
	};

	const handleLinkClick = () => {
		setOpenNavigation(false);
	};

	return (
		<div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
			<div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
				<a className="block w-[12rem] xl:mr-8" href="">
					<img
						src={brainwave}
						width={190}
						height={40}
						alt="Brainwave"
					/>
				</a>

				<nav
					className={`${
						openNavigation ? "flex" : "hidden"
					} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
				>
					<ul className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
						{navigation.map((navigationItem) => {
							return (
								<li key={navigationItem.id}>
									<a
										href={navigationItem.url}
										className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
											navigationItem.onlyMobile
												? "lg:hidden"
												: ""
										} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
											navigationItem.url === location.hash
												? "z-2 lg:text-n-1"
												: "lg:text-n-1/50"
										}
										lg:leading-5 lg:hover:text-n-1 xl:px-12`}
										onClick={handleLinkClick}
									>
										{navigationItem.title}
									</a>
								</li>
							);
						})}
					</ul>
					<HamburgerMenu />
				</nav>
				<a
					href="#signup"
					className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
				>
					New account
				</a>
				<Button className="hidden lg:flex" href="#login">
					Sign in
				</Button>
				<Button
					className="ml-auto lg:hidden"
					px="px-3"
					onClick={handleToggleNavigation}
				>
					<MenuSVG />
				</Button>
			</div>
		</div>
	);
};

export default Header;
