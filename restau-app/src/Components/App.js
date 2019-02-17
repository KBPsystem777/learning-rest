import React from 'react';
import axios from 'axios';

class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            name: [],
            price: [],
            picture: []
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:8080/api/dishes`).then((res) => {
            this.setState =( {
                name: [...this.state.name, res.data[i].name],
                price: [...this.state.price, res.data[i].price],
                picture: [...this.state.picture, res.data[i].picture]
            })
        }).catch((err) => {
            console.log(err)
        })

    }
    

    Style = {
        margin: '10px',
        padding: '10px'
    }


    render() {
        return (
            <div>
                <div></div>
            </div>
        )
    }
}

export default App;