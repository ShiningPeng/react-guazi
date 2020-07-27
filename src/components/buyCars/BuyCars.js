import React, { Component, useState, useEffect, useRef } from 'react';
import './BuyCars.css'

export default function BuyCars() {
    let base = 0,
        ranges = [];
    const carcheckTabs = {
        '车辆档案': '档案',
        '车况检测': '车况',
        '服务保障': '服务',
        '推荐': '推荐'
    }
    const navs = Object.keys(carcheckTabs);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabClick = e => {
        const ltab = e.target.getAttribute("data-ltab");
        const activeIndex = e.target.getAttribute("data-index");
        setActiveIndex(parseInt(activeIndex, 10));
        // 需要滚动的那个元素.scrollIntoView
        const rtab = document.querySelector(`[data-rtab="${ltab}"]`);
        rtab.scrollIntoView({
            behavior: "smooth"
        });
    };
    const ref = useRef();
    useEffect(() => {
        const tabDetail = ref.current;
        const tabs = tabDetail.querySelectorAll("[data-rtab]");
        for (let tab of tabs) {
            let h = tab.getBoundingClientRect().height;
            let newH = base + h;
            ranges.push([base, newH]);
            base = newH;
        }
        function onScroll() {
            console.log('onScroll')
            const scrollTop = tabDetail.scrollTop;
            const index = ranges.findIndex(
                range => scrollTop >= range[0] && scrollTop < range[1]
            );
            setActiveIndex(index);
        }
        tabDetail.addEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className="buycar-nav">
                {navs.map((nav, i) => {
                    return (
                        <div
                            key={i}
                            data-ltab={nav}
                            data-index={i}
                            className={activeIndex === i ? "active buycar-nav-item" : "buycar-nav-item"}
                            onClick={handleTabClick}
                        >
                            {nav}
                        </div>
                    )
                })}
            </div>
            <div className="buycar-navcontent" ref={ref}>
                <div className="buycar-carinfo" data-rtab="车辆档案">车辆档案</div>
                <div className="buycar-carcheck" data-rtab="车况检测">
                    <div className="buycar-carcheck-top">
                        <h3 className="buycar-title">车况检测</h3>
                        <span className="buycar-carcheck-time buycar-item-top-text">2019.08.13 11:28:22 完成深度复检</span>
                    </div>
                    <div className="buycar-carcheck-master">
                        <div className="buycar-carcheck-master__avatar"><img width="100%" height="100%" src={require("../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="buycar-carcheck-master-info">
                            <span className="buycar-carcheck-master__name buycar-carcheck-block">丁师傅</span>
                            <span className="buycar-carcheck-master__desc buycar-carcheck-block">已完成595辆车的检测工作</span>
                        </div>
                        <button className="buycar-carcheck-master__button">咨询车况</button>
                    </div>
                    <div className="buycar-carcheck-checkresult">
                        <div className="buycar-carcheck-checkresult-text">经检测，该车排除火烧、泡水、
                        调表情况；关键事故部件中未发现变形异常项；无钣金痕迹；无焊接、切割动作。发动机
                        舱内部无拆卸痕迹；核心部件无更换记录；无漏油痕迹。该车覆盖件前保险杠、后保险杠有划痕破损；
                        少量更换，不影响行车安全。车辆外观有轻微划痕刮蹭；详细结果请查看检测报告。</div>
                        <div className="buycar-carcheck-checkresult-link">解密瓜子复检环节，了解检车详情&nbsp;&gt;</div>
                    </div>
                    <div className="buycar-carcheck-detail">
                        <span className="buycar-carcheck-detail-tab">259项检测</span>
                        <span className="buycar-carcheck-detail-tab">27项瑕疵</span>
                    </div>
                    <div className="buycar-carcheck-check-wrap">
                        <span className="buycar-carcheck-check-top">拒收严重结构性损伤车、火烧车、水浸车</span>
                        <span className="buycar-carcheck-check-shigupaicha"><span>事故排查（64项）</span><span className="youxiu">优秀</span></span>
                        <div className="buycar-carcheck-check-items">
                            <span className="buycar-carcheck-check-item"><span>底盘检测（48项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>轻微碰撞检测（22项）</span><span className="yiban">一般</span></span>
                            <span className="buycar-carcheck-check-item"><span>易损耗部件（26项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>常用功能检测（95项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>启动检测（20项）</span><span className="lianghao">良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>外观内饰检测（22项）</span><span className="youxiu">优秀</span></span>
                        </div>
                    </div>
                    <div className="buycar-carcheck-problem-wrap">
                        <div className="buycar-carcheck-problem-pic"><img width="100%" height="100%" src={require("../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="buycar-carcheck-problem-text">
                            <h3 className="buycar-carcheck-problem-name buycar-title">后防撞梁</h3>
                            <span className="buycar-carcheck-problem-desc">该部件有轻微（小面积）钣金，不影响车辆正常使用，没有安全隐患</span>
                        </div>
                    </div>
                    <span className="buycar-carcheck-report-link">完整检测报告&nbsp;&gt;</span>
                </div>
                <div className="white-line"></div>
                <div className="buycar-service" data-rtab="服务保障">
                    <div className="buycar-service-top">
                        <h3 className="buycar-title">服务保障</h3>
                        <span className="buycar-carcheck-time buycar-item-top-text">服务费不超过车价9%，欢迎联系咨询</span>
                    </div>
                    <div className="buycar-service-iconwrap">
                        <div className="buycar-service-iconitem">
                            <svg className="buycar-service-icon" aria-hidden="true">
                                <use xlinkHref="#icon-rili"></use>
                            </svg>
                            <span className="buycar-service-icontext buycar-service-active">7天无理由退车</span>
                        </div>
                        <div className="buycar-service-iconitem">
                            <svg className="buycar-service-icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiuchefuwu"></use>
                            </svg>
                            <span className="buycar-service-icontext">30天全面保修</span>
                        </div>
                        <div className="buycar-service-iconitem">
                            <svg className="buycar-service-icon" aria-hidden="true">
                                <use xlinkHref="#icon-yusan"></use>
                            </svg>
                            <span className="buycar-service-icontext">1年或2万公里保障</span>
                        </div>
                    </div>
                    <div className="buycar-service-detailwrap">
                        <div className="buycar-service-detailitem">
                            <span className="buycar-service-detailitem-top"><span className="font-weight">7天无理由退车</span><span>&gt;</span></span>
                            <span className="buycar-service-detailitem-desc">当您在瓜子平台购车后，满足7天无理由
                            退车适用条件的均可在7天内申请退车</span>
                        </div>
                        <div className="buycar-service-detailitem">
                            <span className="buycar-service-detailitem-top"><span className="font-weight">30天车况保修</span><span>&gt;</span></span>
                            <span className="buycar-service-detailitem-desc">交易完成后30天内，发现任何符合30天保修条件下的车况问题，即可享受专业的保修服务</span>
                        </div>
                        <div className="buycar-service-detailitem">
                            <span className="buycar-service-detailitem-top"><span className="font-weight">售后保障（支持购买升级）</span><span>&gt;</span></span>
                            <span className="buycar-service-detailitem-desc">完成交易后可享受1年或2万公里全车2大系统售后保障，购买服务升级套餐，可将2大系统保障升级至16大系统的增值保障（具体延保保障范围请以交易合同的约定为准）
                            </span>
                            <div className="buycar-service-baoxiu">
                                <div >报修流程</div>
                                <span className="buycar-service-baoxiu-step">电话申诉&nbsp;&gt;&nbsp;费用确定&nbsp;&gt;&nbsp;维修服务</span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                    <div className="buycar-carcheck-master padding">
                        <div className="buycar-carcheck-master__avatar"><img width="100%" height="100%" src={require("../../assets/img/car1.jpg")} alt="" /></div>
                        <div className="buycar-carcheck-master-info">
                            <span className="buycar-carcheck-master__name buycar-carcheck-block">专属顾问</span>
                            <span className="buycar-carcheck-master__desc buycar-carcheck-block">为您解答疑惑</span>
                        </div>
                        <button className="buycar-carcheck-master__button">咨询问题</button>
                    </div>
                    <div className="buycar-service-question-wrap">
                        <span>车况真实吗</span>
                        <span>可否分期</span>
                        <span>牌照能过户吗</span>
                        <span>车辆怎么过户</span>
                        <span>保险怎么办</span>
                        <span>交易注意事项</span>
                    </div>
                </div>
                <div className="white-line"></div>
                <div className="buycar-recommend buycar-title" data-rtab="推荐">推荐</div>
            </div>
        </>
    );
}
