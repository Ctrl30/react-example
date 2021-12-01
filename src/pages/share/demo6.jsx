import React, { Component } from 'react';
import style from './demo6.scss';

/**
 * 
 *
 * 
pointer-events: auto;
pointer-events: none; 元素永远不会成为鼠标事件的target
pointer-events: visiblePainted;  SVG only 
pointer-events: visibleFill;     SVG only 
pointer-events: visibleStroke;   SVG only 
pointer-events: visible;         SVG only 
pointer-events: painted;         SVG only 
pointer-events: fill;            SVG only 
pointer-events: stroke;          SVG only 
pointer-events: all;             SVG only 

pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
 */

export default class componentName extends Component {
    handleClick = (event,msg)=>{
        // event.stopPropagation();
        console.log(msg)
    }
    render() {
        return (
            <div className={style.wrap}>
                <div className={style.itemA} onClick={(e)=>this.handleClick(e, 'itemA Clicked')}  />
                <div className={style.itemB} onClick={(e)=>this.handleClick(e, 'itemB Clicked')} />
            </div>
        )
    }
}
