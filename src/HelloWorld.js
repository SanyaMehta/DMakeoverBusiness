import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateCategory from './Services/category'


class Hello extends Component {
    render() {
        return ( 
        < div >
            <h1 > DMakeover </h1> 
            <CreateCategory/>
         </div>
        )
    }
}

export default Hello;