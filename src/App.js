import './App.css';

import First from './props/FirstComp';
import Second from './props/SecondComp';
import Third from './props/ThirdComp';
import Fourth from './props/FourthComp';
import CarData from './props/CarSpecs'
import UseStateComp from './statemngmnt/UseStateDemo';
import EventsDemo from './statemngmnt/SyntheticEve';
import MapEx from './compnents/MapDemo'
import TwoWayDataBinding from './compnents/TwoWayDataBinding'
import UseEffectDemo from './statemngmnt/useEffectComp'
import AxiosTest from './axios/AxiosDemo'
import CandidateData from './axios/CandidateDataPost'
import SetTimeoutComp from './bouncemechanism/SetTimeoutDemo'
import ReactHookFormComp from './formlibraries/UseFormDemo'
import ArrayDemo from './statemngmnt/ArraysDemo'
import CoreComp from './Udemy/CoreComponent'
import PlayerComp from './TicTacToe/Player';
import HeaderComp from './calculator/Header';
import UseFormCompDemo from './formlibraries/UseForm'
// import CreateContextDemo from './createcontextusecontext/CreateContext'
import FirstComponent from './clientsiderouting/FirstComp';
import SecondComponent from './clientsiderouting/SecondComp';
import ThirdComponent from './clientsiderouting/ThirdComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigatorComponent from './clientsiderouting/navigator';
import ProjectSidebar from './section9/ProjectSidebar';

const data = {
  name: 'somesh',
  age: 30,
  area: 'TDP',
  ofc: 'Deloitte'
}

const carDet = {
  color: 'red',
  price: 12000,
  model: 2025,
  milage: 15
}

function App() {

  return (
    <>
      <BrowserRouter>
        <NavigatorComponent />
        <ProjectSidebar />
        <Routes>
          <Route path='/first/:params' element={<FirstComponent />} />
          <Route path='/second' element={<SecondComponent />} />
          <Route path='/third' element={<ThirdComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
