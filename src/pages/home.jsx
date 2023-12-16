import '../links/css/home.css';
import NavBar from '../components/NavBar';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <body className="body">
        <div className="container d-flex align-items-center justify-content-center" id='home'>
          <div id="title" className=''>
          <h1 className='m-0 p-0 '>
            <span className="primary x">SHILP </span> 
            <span className="text-light">IIT BHU</span>
            </h1>
          <h2 className='text-light m-0 p-0'>Civil Engineering Society</h2>
          </div>
        </div>
        <div className="container" id='competitions'></div>
        <div className="container" id='competitions'>
          <ImageGallery></ImageGallery>
        </div>
      </body>
    </div>
  );
}

export default Home;
