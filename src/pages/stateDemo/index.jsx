import React, { Component } from 'react';
import { Button } from 'antd';

export default class StateDemo extends Component {
    state={
        count1: 0,
        count2: 0,
    }

    componentDidMount(){
        const asyncBtn = document.getElementById('async');
        asyncBtn.addEventListener('click',()=>{
            this.setState({
                count1: this.state.count1+1
            })
            console.log('count1', this.state.count1)
        })

    }

    handleSync = ()=>{
        this.setState({
            count2:this.state.count2+1,
        })
        console.log('count2',this.state.count2)
    }

    render() {
        return (
            <div>
                <Button id="async">同步</Button>
                <Button onClick={this.handleSync}>异步</Button>
            </div>
        )
    }
}
