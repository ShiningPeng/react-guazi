import React, { Component } from 'react';
import './Mine.css';
import CarItem from '../../common/carItem/CarItem';
import store from './store';
import { getMineNumbers, getMineCarList } from './store/actionCreators';
import axios from 'axios'

class Mine extends Component {
    constructor(props) {
        super(props)
        // console.log('constructor')
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }


    getCarlist() {
        console.log('getcarlist')
        axios.post('http://mock-api.com/RzJZr1z9.mock/mine/carlist')
            .then((res) => {
                // console.log('-------000000000',this.state.carList );
                console.log('res', res.data)
                

            })
            .catch((error) => {
                console.log('error-----', error);
               
            })
    }
    //当组件输出到 DOM 后会执行 componentDidMount()

    storeChange() {
        this.setState(store.getState())
    }

    componentDidMount() {
        // const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        // this.getCarlist();
        const action = getMineNumbers()
        const action1 = getMineCarList()
        store.dispatch(action1)
        store.dispatch(action)
    }
    render() {
        let { carList } = this.state;

        return (
            <div className="mine">
                <header className="mine-header">
                    <div className="mine-header-blank"></div>
                    <svg className="mine-icon mine-setting" aria-hidden="true">
                        <use xlinkHref="#icon-shezhi"></use>
                    </svg>
                </header>
                <div className="mine-phone-button">
                    <div className="mine-phone">您好，{this.state.phone}</div>
                    <div className="mine-button">切换至车主模式</div>
                </div>
                <div className="mine-items">
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.cartNum}</span>
                        <span>购物车</span></div>
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.compareNum}</span>
                        <span>我的对比</span></div>
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.dingyueNum}</span>
                        <span>我的订阅</span></div>
                    <div className="mine-item">
                        <span className="mine-item-num">{this.state.scanNum}</span>
                        <span>浏览记录</span></div>
                </div>
                <div className="white-line"></div>
                <div className="mine-items">
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-wangyueche"></use>
                        </svg>
                        <span className="mine-text">我的约看</span>
                    </div>
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-shouyetubiao2-18"></use>
                        </svg>
                        <span className="mine-text">我买的车</span>
                    </div>
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-naoling"></use>
                        </svg>
                        <span className="mine-text">降价提醒</span>
                    </div>
                    <div className="mine-item">
                        <svg className="mine-icon" aria-hidden="true">
                            <use xlinkHref="#icon-jilu"></use>
                        </svg>
                        <span className="mine-text">砍价记录</span>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="mine-myshare">
                    <h3>我的专享</h3>
                    <div className="mine-myshare-content">
                        <div className=" mine-myshare-item">
                            <span className="origine-color coupon">{this.state.couponNum}</span>
                            <span className="mine-word">优惠券</span>
                        </div>
                        <div className="test mine-myshare-item">

                            <span className="origine-color">测一测</span>
                            <span className="mine-word">贷款额度</span>
                        </div>
                    </div>
                </div>
                <div className="mine-common">
                    <h3>常用功能</h3>
                    <div className="mine-common-items">
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-icon_A"></use>
                            </svg>
                            <span className="mine-text">我的客服</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-xunhuanliyong"></use>
                            </svg>
                            <span className="mine-text">购车流程</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-xinxi"></use>
                            </svg>
                            <span className="mine-text">意见反馈</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-yinhangka"></use>
                            </svg>
                            <span className="mine-text">我要还款</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-dianhua7"></use>
                            </svg>
                            <span className="mine-text">屏蔽打扰</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-71_wenjuan"></use>
                            </svg>
                            <span className="mine-text">问卷调查</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-shenghuoyongpin-"></use>
                            </svg>
                            <span className="mine-text">售后保障</span>
                        </div>
                        <div className="mine-common-item">

                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-drxx41"></use>
                            </svg>
                            <span className="mine-text">消息设置</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-tousugongdan"></use>
                            </svg>
                            <span className="mine-text">服务热线</span>
                        </div>
                        <div className="mine-common-item">
                            <svg className="mine-icon" aria-hidden="true">
                                <use xlinkHref="#icon-ziyuan"></use>
                            </svg>
                            <span className="mine-text">瓜子养车</span>
                        </div>
                        <div className="mine-common-item"></div>
                        <div className="mine-common-item"></div>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="mine-recommend">
                    <h3>为你推荐</h3>
                    <div className="mine-recommend-banner">
                        <img width="100%" height="100%" src="" alt="" />
                    </div>
                    <div className="mine-recommend-items">
                        {
                            carList.map((item, index) => {
                                return (
                                    <CarItem
                                        item={item}
                                        index={index}
                                        key={index + item}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Mine