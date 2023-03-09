import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProductsData } from "./Redux/actions";
import { CategoryCard } from "./components/CategoryCard";
function App() {
  const dispatch = useDispatch()
  const data=useSelector((store)=>store.data)
  console.log('data:', data)
  async function getData() {
    axios.get('https://movie-fake-server.herokuapp.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data);
        dispatch( getProductsData(response.data))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <div>
      < Navbar />
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={< About/>}> </Route>
        <Route path="/products" element={< Products/>}> </Route>
        {/* <Route path="/products/men" element={< CategoryCard/>}> </Route> */}
        <Route path="/products/:root" element={< CategoryCard/>}> </Route>
        {/* <Route path="/products/kids" element={< CategoryCard/>}> </Route>
        <Route path="/products/homedecor" element={< CategoryCard/>}> </Route> */}

        
      </Routes>
    </div>
  );
}

export default App;
