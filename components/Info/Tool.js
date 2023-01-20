import { useState } from 'react'
import { IconMinus } from '../common/Icons/IconMinus'
import { IconPlus } from '../common/Icons/IconPlus'
import style from './Info.module.scss'
export function Tool(props) {
    const [isShow, setIsShow] = useState(true)
    return (
        <div className={style.tool}>
            <div className={style.tool__group}>
                <h3>{props.tool_article}</h3>
                <button onClick={() => {setIsShow(!isShow)}}>{isShow ? <IconPlus /> : <IconMinus />}</button>
            </div>
            { isShow
                ? null
                : <div className={style.tool__text}>
                    <p>{props.tool_text}</p>
                </div> }
        </div>
    )
}