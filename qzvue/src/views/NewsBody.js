import React, {Component} from 'react'
import './test.css'
export default class NewsBody extends Component{
    render() {
        return(
            <div className="test-css">{this.props.params}</div>
        )
    }

}
