import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SectionContact from './components/section_contact/SectionContact';
import SectionSlider from './components/section_slider/SectionSlider';
import SectionSkills from './components/section_skills/SectionSkills';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<SectionSkills />
				<SectionSlider />
				<SectionContact />
			</main>
			<Footer />
		</>
	);
};

export default App;
