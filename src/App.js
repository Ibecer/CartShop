import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Nabvar'

class App extends Component {

  state = {
    productos: [
      {name: 'Tomato', price: 15, img: '/productos/tomate.jpg'},
      {name: 'Chickpeas', price: 25, img: '/productos/arbejas.jpg'},
      {name: 'Letuce', price: 5, img: '/productos/lechuga.jpg'}
    ],
    cart:[],
    isCartVisible: false,
  }

  addToCart = (producto) => {
    const {cart} = this.state
      if(cart.find(x => x.name === producto.name)) {
        const newCart = cart.map(x => x.name === producto.name
        ? ({
          ...x,
          quantity: x.quantity +1
        })
        : x)
        return this.setState({cart: newCart})
      }
    return this.setState({
      cart: this.state.cart.concat({
        ...producto,
        quantity: 1
      })
    })
  }

  showCart = ()=> {
    if(!this.state.cart.length){
      return
    }
    this.setState({isCartVisible: !this.state.isCartVisible})
  }

  render(){
    
    const {isCartVisible} = this.state
    return(
    <div>
      <Navbar 
        cart={this.state.cart} 
        isCartVisible={isCartVisible}
        showCart={this.showCart}
        />
      <Layout>
        <Title/>
        <Productos
          agregarAlCarro={this.addToCart}
          productos = {this.state.productos}
        />
      </Layout>
    </div>)
  }
}

export default App;
