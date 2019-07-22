import React, {Component} from 'react'
import './Header.css'
import {Button, Tabs} from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
// import gitUrl from '../images/gitHub.png'

export default class Header extends Component {
    constructor(p) {
        super(p);
        this.state = {
            tabsArr: ['第一', '第二', '第三', '第四', '第五', '第六', '第七', '第八']
        }
    }

    handleChange = function (e) {
        console.log('选择',e)
    }

    render() {
        const {TabPane} = Tabs;
        return (
            <div className="header-content">
                <div className="header-body">
                    <div className="header-body-left">
                        <img alt="" src={require("../images/gitHub.png")}/>
                    </div>
                    <div className="header-body-middle">
                        <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                            {this.state.tabsArr.map((j, index) => {
                                return <TabPane tab={j} key={index}>
                                    <Link to={`/news/${j}`}>
                                        {index}
                                    </Link>
                                </TabPane>
                            })}
                        </Tabs>
                    </div>
                    <div className="header-body-right">
                        <Button className="header-body-right-buuton" type="primary">登录</Button>
                    </div>
                </div>
            </div>
        )
    }

}
