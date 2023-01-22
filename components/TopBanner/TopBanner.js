import { IconHeadLine } from "../common/Icons/IconHeadLine";
import { IconHeart } from "../common/Icons/IconHeart";
import { IconParrot } from "../common/Icons/IconParrot";
import { IconPlace } from "../common/Icons/IconPlace";
import style from './TopBanner.module.scss'
import animate from './animate.module.scss'
import { useInView } from 'react-intersection-observer';
import { useState } from "react";

export function TopBanner() {
    const [focus, setFocus] = useState(false)
    const { ref: articleRef, inView: articleIsVisible } = useInView()
    const { ref: searchRef, inView: searchIsVisible } = useInView()
    const { ref: membersRef, inView: membersIsVisible } = useInView()
    return (
        <div className={style.topBanner}>
            <div className={style.topBanner__text}>
                <div className={style.topBanner__text__headLine}>
                    <IconHeadLine />
                </div>

                <div ref={articleRef} className={style.topBanner__text__article}>
                    <p className={articleIsVisible
                        ? animate.animateParagraph
                        : ''
                    }>
                        The scale of the challenges facing our planet can seem daunting, but we can all do something.
                    </p>
                </div>

                <div ref={searchRef} className={`
                    ${style.topBanner__text__finder}
                    ${searchIsVisible
                        ? animate.animateSearch
                        : ''}
                    `}>
                    <form>
                        <div className={style.search_line}>
                            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="text" />
                            {!focus ?
                            <div className={style.search_line__palceholder}>
                                <IconPlace />
                                <span>Find the place to help</span>
                            </div> : null}

                        </div>
                        <button>SEARCH</button>
                    </form>
                </div>
            </div>

            <div ref={membersRef} className={style.topBanner__parrot}>

                <div className={style.topBanner__parrot__svgContainer}>
                    <IconParrot />
                </div>

                <div
                    className={`
                        ${style.topBanner__parrot__members}
                        ${membersIsVisible
                            ? animate.animateMembers
                            : ''}
                    `}
                >
                    <IconHeart />
                    <div className={style.count}>
                        <span>Members</span>
                        <span>29128</span>
                    </div>
                </div>
            </div>
        </div>
    )
}