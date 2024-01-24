import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Rout from './route';
import ProductDetail from './components/ProductDetail';

const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  //prosuct detail
  const [close, setClose] = useState(false)
  const [detail, seetDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(ProductDetail)
  const searchbtn = (product) =>
  {
    const change = ProductDetail.filter((x) =>
    {
      return x.Cat === product
    })
    setProduct(change);
  }
  //product detail
  const view = (product) =>
  {
    seetDetail([{...product}])
    setClose(true)
  }
  //add to cart
  const exsit = cart.find((x) =>
  {
    return x.id === product.id
  })
  const addtocart = (product) =>
  {
      if(exsit)
      {
        alert("This product is already add to cart")
      }
      else
      {
        setCart([...cart, {...product, qty:1}])
        alert("Product is added to cart")
      }
  }
  console.log(cart)
  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App