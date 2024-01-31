import "../links/css/home.css";
import "../links/css/events.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InnovationInStyle from "../components/innovationInStyle";
import Merch from "../components/Store/Mercahndise";

const Store = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body">
				<NavBar AllAuth={AllAuth} />

				<div className="Container">
					<InnovationInStyle />
					<Merch />
				</div>

				<Footer></Footer>
			</div>
		</div>
	);
};

export default Store;
