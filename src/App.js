
import {

    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './pages/About/About';
import Demodrop from "./pages/Demodrop/Demodrop";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import './App.css';
import MyDemos from "./pages/mydemos/MyDemos";
import NewSubmissions from "./pages/Submission/NewSubmissions";
import ViewSubmission from "./pages/viewSubmission/ViewSubmission";
import ViewComment from "./pages/Comment/ViewComment";
import WriteComment from "./pages/Comment/WriteComment";
import EditComment from "./pages/Comment/EditComment";
import OldSubmissions from "./pages/Submission/OldSubmissions";



function App() {



    window.onunload = () => {
        // Clear the local storage
        window.localStorage.clear()
    }



    return (

              <Switch>
                  <Route exact path="/">
                      < Homepage />
                  </Route>
                  <Route exact path="/About">
                      <About />
                  </Route>
                  <Route exact path="/Demodrop">
                      <Demodrop />
                  </Route>
                  <Route exact path="/SignIn">
                      <SignIn />
                  </Route>
                  <Route exact path="/SignUp">
                      <SignUp />
                  </Route>
                  <Route exact path ="/myDemos">
                      <MyDemos />
                  </Route>
                  <Route exact path ="/newsubmissions">
                      <NewSubmissions/>
                  </Route>
                  <Route exact path ="/oldsubmissions">
                      <OldSubmissions/>
                  </Route>
                  <Route exact path ="/viewSubmission">
                      <ViewSubmission/>
                  </Route>

                  <Route exact path ="/viewComment">
                      <ViewComment/>
                  </Route>
                  <Route exact path ="/writeComment">
                      <WriteComment/>
                  </Route>
                  <Route exact path ="/editComment">
                      <EditComment/>
                  </Route>


              </Switch>

  );
}

export default App;
