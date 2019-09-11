import React, { Component } from 'react'
import css from './index.module.scss'

class Aside extends Component {
    render() {
        return <div className={css.all}>
            <div className={css.up}>
                <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt=""/>
            </div>
            <div className={css.down}>
                <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
            </div>
        </div>
    }
}

export default Aside