import { Component } from "react";

const styles = {
    titulo: {
        marginBottom: '30px'
    }
}

class Title extends Component {
    render(){
        return(
            <h1 style={styles.titulo}>Shop</h1>
        )
    }
}

export default Title