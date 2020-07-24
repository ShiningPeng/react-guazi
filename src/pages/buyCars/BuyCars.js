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
                        <h3 className="buycar-carcheck-title">车况检测</h3>
                        <span className="buycar-carcheck-time">2019.08.13 11:28:22 完成深度复检</span>
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
                        <span className="buycar-carcheck-check-shigupaicha"><span>事故排查（64项）</span><span>良好</span></span>
                        <div className="buycar-carcheck-check-items">
                            <span className="buycar-carcheck-check-item"><span>底盘检测（48项）</span><span>良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>轻微碰撞检测（22项）</span><span>一般</span></span>
                            <span className="buycar-carcheck-check-item"><span>易损耗部件（26项）</span><span>良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>常用功能检测（95项）</span><span>良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>启动检测（20项）</span><span>良好</span></span>
                            <span className="buycar-carcheck-check-item"><span>外观内饰检测（22项）</span><span>优秀</span></span>
                        </div>
                    </div>
                    <div className="buycar-carcheck-problem-wrap"></div>
                    <span className="buycar-carcheck-report-link">完整检测报告&nbsp;&gt;</span>
                </div>
                <div className="buycar-service" data-rtab="服务保障">服务保障</div>
                <div className="buycar-recommend" data-rtab="推荐">推荐</div>
            </div>

        </>
    );
}
