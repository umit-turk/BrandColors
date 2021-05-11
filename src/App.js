import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import MainContext from './MainContext';
import BrandsData from './brand.json'


function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
      brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands]= useState([])

  useEffect(()=> {
    console.log(selectedBrands)
  }, [selectedBrands])

  const data = {
    brands,
    setSelectedBrands,
    selectedBrands,
  }

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
