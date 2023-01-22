import { useState } from 'react'
import { IconMinus } from '../common/Icons/IconMinus'
import { IconPlus } from '../common/Icons/IconPlus'
import style from './Info.module.scss'
import { CSSTransition } from 'react-transition-group'
export function Tool(props) {
    const [isShow, setIsShow] = useState(true)
    return (
        <div className={style.tool}>
            <div className={style.tool__group}>
                <h3>{props.tool_article}</h3>
                <button onClick={() => { setIsShow(!isShow) }}>{isShow ? <IconPlus /> : <IconMinus />}</button>
            </div>
            <CSSTransition 
                in={!isShow} 
                timeout={400}
                classNames="alert"
                unmountOnExit
            >
                <div className={style.tool__text}>
                    <p>{props.tool_text}</p>
                </div>
            </CSSTransition>
        </div>
    )
}