/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from "react-router-dom";
import AnimasiRoute from "./components/AnimasiRoute";

export default function App() {
    return(
      <>

        <div className=" dark:bg-bg">
            <Router>
              <AnimasiRoute />
            </Router>
        </div>


      </>
    )
}