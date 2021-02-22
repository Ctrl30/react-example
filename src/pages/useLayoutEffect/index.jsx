import React,{useLayoutEffect} from 'react';
import style from './style.scss';

export default function UseLayoutEffect() {
    const ref = React.createRef();
    useLayoutEffect(() => {
        // ref.current.left =100
            ref.current.style.marginLeft = '300px'
        console.log('ref',ref)
        return () => {
            
        }
    }, [])
    return (
        <div className={style.wrap}>
            <div ref={ref} className={style.inner}></div>
        </div>
    )
}
