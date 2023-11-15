import React, { useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_product'
const App = () => {
  //Shop Page product
  const [shop, setShop] = useState(Homeproduct)
  //Shop Search Filter
  const [search, setSearch] = useState ('')
  //Shop category filter
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) =>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }
  //Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("Please Search Something !")
    setShop(Homeproduct)
  }
  else
  {
      
      const searchfilter = Homeproduct.filter((x) =>
      {
        return x.cat === search
      })
      setShop(searchfilter)
      
  }
}  
  
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App