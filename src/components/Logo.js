import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem'
    }
    
}
class Logo extends Component {
    render(){
        return(
            <p style={styles.logo}>MyShop</p>
        )
    }
}

export default Logo