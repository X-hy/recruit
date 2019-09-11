import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
class Navbar extends Component {
    render() {
        return <div className={css.box}>
            <h1>
                <i className={css.words}>社招官网</i>
                <i className={css.one}>|</i>
                <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" />
            </h1>
            <ul className={css.nav_ul}>
                <li className={css.nav_li}><NavLink to="/home" replace activeClassName="myactive" className={css.first}>首&nbsp;&nbsp;&nbsp;页</NavLink></li>
                <li className={css.nav_li}><NavLink to="/society" replace activeClassName="myactive" >社会招聘</NavLink></li>
                <li className={css.nav_li}><NavLink to="/campus" replace activeClassName="myactive" >校园招聘</NavLink></li>
                <li className={css.nav_li}><NavLink to="/ali" replace activeClassName="myactive" >了解阿里</NavLink></li>
                <li className={css.nav_li}><NavLink to="/personal" replace activeClassName="myactive">个人中心</NavLink></li>
            </ul>
            <div className={css.right}>
                <p className={css.header_p}>欢迎来到阿里巴巴集团招聘！</p>
                <span >登陆</span>
                <i className={css.two}>|</i>
                <span>注册</span>
            </div>
        </div>
    }
}

export default Navbar