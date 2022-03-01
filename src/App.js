import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCropComponent from './components/ListCropComponent';
import AddCropsComponenet from './components/AddCropsComponenet';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className='container'>
                    <Routes>
                        <Route exact path = "/" element = {<ListCropComponent />}></Route>
                        <Route path = "/crops" element = {<ListCropComponent />}></Route>
                        <Route path = "/add-crop" element = {<AddCropsComponenet />}></Route>
                        <Route path = "/edit-crops/:id" element = {<AddCropsComponenet />}></Route>
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;