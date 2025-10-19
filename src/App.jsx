import './App.css';
import { Suspense } from 'react';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import IssueManagement from './Components/IssueManagement';
import Spinner from './Components/Spinner';

const fetchIssues = async () => {
  const fetchData = await fetch('/data.json');
  return fetchData.json();
};
const fetchPromise = fetchIssues();

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Spinner></Spinner>}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
