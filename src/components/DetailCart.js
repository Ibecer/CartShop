import { Component } from "react";
import Producto from "./Producto";

const styles = {
    detailsCart:{
        backgroundColor:'#FFF',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        width:'300px',
        right: 50,
    },
    ul:{
        margin: 0,
        padding: 0,
    },
    producto:{
        listStyle:'none',
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetailCart extends Component {
    render(){
        const {cart} = this.props
        console.log(cart)
        return(
            <div style={styles.detailsCart}>
                <ul style={styles.ul}>
                    {cart.map(x=> 
                        <li style={styles.producto} key={x.name}>
                            <img alt={x.name} src={x.img} width='50' height='32'/>
                            {x.name} <span>{x.quantity}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default DetailCart