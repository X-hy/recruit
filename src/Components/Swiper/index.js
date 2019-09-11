import React, { Component } from 'react'
import css from './index.module.scss'
import { Slider } from '@alifd/next'

class Swiper extends Component {
    render() {
        return <div className={css.all}>
            <div style={{ width: '600px' }}>
                <div className={css.demo}>
                    <div className={css.word}>
                        <span className={css.left}>最新职位</span>
                        <span className={css.right}>更多</span>
                    </div>
                    <div className={css.move}>
                        <Slider slideDirection="ver" slidesToShow={5} infinite="true" slidesToScroll={1} dots={false} arrowPosition="inner" animation="rolling" autoplay="true" speed={600} arrowDirection="ver" className={css.ver_slick}>
                            {
                                ["人力资源部-湖畔学院专业能力发展专家/高级专家-杭州",
                                    "蚂蚁金服-数据分析高级/资深专家-消费信贷",
                                    "口碑-数据产品专家-杭州",
                                    "蚂蚁金服-BU财务（高级）专家-生态线",
                                    "马-品类策略产品专家-上海",
                                    "盒马-采购培训专家-标品",
                                    "盒马-经营分析专家-标品",
                                    "天猫服饰-男装类目运营专家-杭州"].map((item, index) => <div key={index} className={css.custom_slider} style={{ border: '1px solid transparent',cursor:'pointer' }}><div className={css.h3}>{item}</div></div>)
                            }
                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default Swiper