import './App.css';
import { Suspense } from 'react';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import IssueManagement from './Components/IssueManagement';

const fetchIssues = async () => {
  const fetchData = await fetch('/data.json');
  return fetchData.json();
};
const fetchPromise = fetchIssues();

function App() {
  return (
    <>
      <Navbar></Navbar>

      {/* Box */}

      {/* Button */}
      {/* <ToggleBtn
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtn> */}

      <Suspense fallback={<h1> Loading...</h1>}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
