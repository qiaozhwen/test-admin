import React, {Component} from 'react'
import logo from "../logo.svg";
import Header from "../components/Header";

export default class NewsContent extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </div>
        )
    }

}
