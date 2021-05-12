import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import MainContext from './MainContext';
import BrandsData from './brand.json'
import Copied from './components/Copied';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Collection from './components/Collection';


function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
      brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands]= useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(()=> {
    console.log(selectedBrands)
  }, [selectedBrands])

  useEffect(() => {
    const timeout = setTimeout(()=> {
      setCopied(false)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])

  const data = {
    brands,
    setSelectedBrands,
    selectedBrands,
    setCopied,
    search,
    setSearch
  }

  return (
    <>
      <MainContext.Provider value={data}>
      {copied && <Copied color={copied}/>}
        <Sidebar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Content />
            </Route>
            <Route path="/collection/:slugs">
              <Collection />
            </Route>
          </Switch>        
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
