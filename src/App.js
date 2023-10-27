import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import GalleryAll from "./pages/gallery";
import Tes from "./pages/Tes";
import DataFolder from "./pages/datafolder";

function App() {
  const [login, setLogin] = useState(true);

  useEffect(() => {
    // console.log(login)
  }, [login]);

  return (
    <>
      {login ? (
        <>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          {/* <noscript>You need to enable JavaScript to run this app.</noscript>
          <div class="container-scroller">
            <Navbar />
            <div className="container-fluid page-body-wrapper">
              <Sidebar />
              <div className="main-panel">
                  <Dashboard />
                <Footer />
              </div>
              
            </div>
          </div> */}
          <Router>
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/gallery" exact element={<GalleryAll />} />
              <Route path="/dataFolder/:site" exact element={<DataFolder />} />
            </Routes>
          </Router>
        </>
      ) : (
        <Login setLogin={setLogin} />
        // <Tes/>
      )}
    </>
  );
}

export default App;
