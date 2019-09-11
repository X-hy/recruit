import React, { Component } from 'react'
import css from './index.module.scss'

class Banner extends Component {
    render() {
        return <div className={css.all}>
            <div className={css.cover}>
                <div className={css.photo}>
                    <div className={css.article}>
                        <p className={css.banner_e}>If not now, when?</p>
                        <p className={css.banner_e}>If not me, who?</p>
                        <p className={css.banner_p}>此时此刻，非我莫属！</p>
                    </div>
                    <div className={css.search}>
                        <input type="text" value="请输入职位关键词" placeholder="请输入职位关键词"/>
                        <div className={css.button} onClick={()=>{
                            console.log("搜索按钮")
                        }}>搜索</div>
                    </div>
                    <ul className={css.hot}>
                        <li>热门搜索：</li>
                        <li><a href="#one">JAVA</a></li>
                        <li><a href="#one">IOS</a></li>
                        <li><a href="#one">数据</a></li>
                        <li><a href="#one">安全</a></li>
                        <li><a href="#one">搜索</a></li>
                        <li><a href="#one">算法</a></li>
                        <li><a href="#one">运营</a></li>
                        <li><a href="#one">视觉</a></li>
                        <li><a href="#one">交互</a></li>
                        <li><a href="#one">前端</a></li>
                    </ul>
                </div>
            </div>
        </div>

    }
}

export default Banner