import { IconHeadLine } from "../common/Icons/IconHeadLine";
import { IconHeart } from "../common/Icons/IconHeart";
import { IconParrot } from "../common/Icons/IconParrot";
import { IconPlace } from "../common/Icons/IconPlace";
import style from './TopBanner.module.scss'

export function TopBanner() {
    return (
        <div className={style.topBanner}>
            <div className={style.topBanner__text}>
                <div className={style.topBanner__text__headLine}>
                    <IconHeadLine />
                </div>

                <div className={style.topBanner__text__article}>
                    <p>The scale of the challenges facing our planet can seem daunting, but we can all do something.</p>
                </div>

                <div className={style.topBanner__text__finder}>
                    <form>
                        <div className={style.search_line}>
                            <input type="text" />
                            <div className={style.search_line__palceholder}>
                                <IconPlace />
                                <span>Find the place to help</span>
                            </div>
                        </div>
                        <button>SEARCH</button>
                    </form>
                </div>
            </div>

            <div className={style.topBanner__parrot}>

                <div className={style.topBanner__parrot__svgContainer}>
                    <IconParrot />
                </div>
                
                <div className={style.topBanner__parrot__members}>
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