import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";

import ButtonGradient from "@/assets/svg/ButtonGradient";

const App = () => {
	return (
		<>
			<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
				<Header />
				<Hero />
				<Benefits />
				<Collaboration />
				<Services />
				<Pricing />
				<Roadmap />
				<Footer />
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
