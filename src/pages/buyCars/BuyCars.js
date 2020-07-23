import React, { Component } from 'react';
import './BuyCars.css'

class BuyCars extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="buycar-carcheck">
                    <div className="buycar-carcheck-top">
                        <h3 className="buycar-carcheck-title">车况检测</h3>
                        <span className="buycar-carcheck-time">2019.08.13 11:28:22 完成深度复检</span>
                    </div>
                    <div className="buycar-carcheck-master">
                        <div className="buycar-carcheck-master__avatar"><img width="100%" height="100%" src={require("../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="message-item-info">
                            <span className="buycar-carcheck-master__name buycar-carcheck-block">丁师傅</span>
                            <span className="buycar-carcheck-master__desc buycar-carcheck-block">已完成595辆车的检测工作</span>
                        </div>
                        <button className="buycar-carcheck-master__button">咨询车况</button>
                    </div>

                </div>
            </>
        );
    }
}

export default BuyCars;