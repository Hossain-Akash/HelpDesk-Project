import './App.css';
import Container from './Components/Container';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* Box */}
      <Container>
        <div className="grid grid-cols-3 gap-5 my-12">
          <div className="rounded-sm p-7 h-[250px] text-white  bg-gray-600 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl ">Pending</h1>
            <span className="font-semibold text-3xl">0</span>
          </div>
          <div className="rounded-sm p-7 h-[250px] text-white bg-purple-500 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl ">Submitted</h1>
            <span className="font-semibold text-3xl">0</span>
          </div>
          <div className="rounded-sm p-7 h-[250px] text-white  bg-teal-500 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl ">Reviewed</h1>
            <span className="font-semibold text-3xl">0</span>
          </div>
        </div>
      </Container>

      {/* Button */}
      <Container>
        <div className="text-right mb-12">
          <button className="toggle-btn rounded-l-lg ">All</button>
          <button className="toggle-btn">Pending</button>
          <button className="toggle-btn">Submitted</button>
          <button className="toggle-btn rounded-r-lg ">Reviewed</button>
        </div>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
