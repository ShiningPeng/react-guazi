import React, { Component } from 'react';
import './Mine.css'

class Mine extends Component {
    render() {
        return (
            <div className="Mine">
                <div className="setting">设置</div>
                <div className="phone-and-button">
                    <div className="mine-phone">你好，15179784911</div>
                    <div className="btn">切换至车主模式</div>
                </div>
                <div className="items">
                    <div className="item">
                        <span className="cart-num item-num">0</span>
                        <span>购物车</span></div>
                    <div className="item">
                        <span className="compare-num item-num">0</span>
                        <span>我的对比</span></div>
                    <div className="item">
                        <span className="dingyue-num item-num">0</span>
                        <span>我的订阅</span></div>
                    <div className="item">
                        <span className="scan-num item-num">1</span>
                        <span>浏览记录</span></div>
                </div>
                <div className="white-line"></div>
                <div className="four-func items">
                    <div className="item">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-wangyueche"></use>
                        </svg>
                        <span className="text">我的约看</span>
                    </div>
                    <div className="item">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-shouyetubiao2-18"></use>
                        </svg>
                        <span className="text">我买的车</span>
                    </div>

                    <div className="item">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-naoling"></use>
                        </svg>
                        <span className="text">降价提醒</span>
                    </div>
                    <div className="item">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-jilu"></use>
                        </svg>
                        <span className="text">砍价记录</span>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="myshare">
                    <h3>我的专享</h3>
                    <div className="myshare-content">
                        <div className="coupon myshare-item">
                            <span className="origine-color">0张</span>
                            <span className="word">优惠券</span>
                        </div>
                        <div className="test myshare-item">

                            <span className="origine-color">测一测</span>
                            <span className="word">贷款额度</span>
                        </div>
                    </div>
                </div>
                <div className="common-func">
                    <h3>常用功能</h3>
                    <div className="common-func-wrapper">
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-icon_A"></use>
                            </svg>
                            <span className="text">我的客服</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xunhuanliyong"></use>
                            </svg>
                            <span className="text">购车流程</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xinxi"></use>
                            </svg>
                            <span className="text">意见反馈</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-yinhangka"></use>
                            </svg>
                            <span className="text">我要还款</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-dianhua7"></use>
                            </svg>
                            <span className="text">屏蔽打扰</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-71_wenjuan"></use>
                            </svg>
                            <span className="text">问卷调查</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-shenghuoyongpin-"></use>
                            </svg>
                            <span className="text">售后保障</span>
                        </div>
                        <div className="common-func-item">

                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-drxx41"></use>
                            </svg>
                            <span className="text">消息设置</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-tousugongdan"></use>
                            </svg>
                            <span className="text">服务热线</span>
                        </div>
                        <div className="common-func-item">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-ziyuan"></use>
                            </svg>
                            <span className="text">瓜子养车</span>
                        </div>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="recommend">
                    <h3>为你推荐</h3>
                    <div className="recommend-banner">
                        <img width="100%" height="100%" src="" alt=""/>
                    </div>
                    <div className="recommend-items">
                        <div className="recommend-item">
                            <div className="car-img-wrapper">
                                <img width="100%" height="100%"src={require('../../assets/img/car1.jpg')} alt=""/>
                            </div>
                            <div className="car-info">
                                <span className="car-name">别克 君越 2018款 20T 豪华型</span>
                                <span className="car-desc">2019年 / 1.68万公里</span>
                                <span className="car-price">16.68万</span>
                            </div>
                        </div>
                        <div className="recommend-item">
                            <div className="car-img-wrapper">
                                <img width="100%" height="100%"src={require('../../assets/img/car1.jpg')} alt=""/>
                            </div>
                            <div className="car-info">
                                <span className="car-name">别克 君越 2018款 20T 豪华型</span>
                                <span className="car-desc">2019年 / 1.68万公里</span>
                                <span className="car-price">16.68万</span>
                            </div>
                        </div>
                        <div className="recommend-item">
                            <div className="car-img-wrapper">
                                <img width="100%" height="100%"src={require('../../assets/img/car1.jpg')} alt=""/>
                            </div>
                            <div className="car-info">
                                <span className="car-name">别克 君越 2018款 20T 豪华型</span>
                                <span className="car-desc">2019年 / 1.68万公里</span>
                                <span className="car-price">16.68万</span>
                            </div>
                        </div>
                        <div className="recommend-item">
                            <div className="car-img-wrapper">
                                <img width="100%" height="100%"src={require('../../assets/img/car1.jpg')} alt=""/>
                            </div>
                            <div className="car-info">
                                <span className="car-name">大众 迈腾 2019款 330TSI DSG领先型 国VI</span>
                                <span className="car-desc">2019年 / 1.68万公里</span>
                                <span className="car-price">16.68万</span>
                            </div>
                            {/* <div className="line">ddd</div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mine