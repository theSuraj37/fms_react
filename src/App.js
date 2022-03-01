import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/CropComponent/FooterComponent';
import HeaderComponent from './components/CropComponent/HeaderComponent';
import ListCropComponent from './components/CropComponent/ListCropComponent';
import AddCropsComponenet from './components/CropComponent/AddCropsComponenet';
import ListEquipmentComponent from './components/EquipmentComponent/ListEquipmentComponent';
import AddEquipmentComponent from './components/EquipmentComponent/AddEquipmentComponent';

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
                <div className='container'>
                    <Routes>
                        <Route path = "/equipments" element = {<ListEquipmentComponent />}></Route>
                        <Route path = "/add-equipment" element = {<AddEquipmentComponent />}></Route>
                        <Route path = "/edit-equipments/:id" element = {<AddEquipmentComponent />}></Route>
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;