import Image from "next/image";
import { IconHeart } from "../common/Icons/IconHeart";
import { IconPlace } from "../common/Icons/IconPlace";
import style from './TopBanner.module.scss'

export function TopBanner() {
    return (
        <div className={style.topBanner}>
            <div className={style.topBanner__text}>
                <div className={style.topBanner__text__headLine}>
                    <Image
                        src='/assets/Headline.png'
                        alt="Headline"
                        width={550}
                        height={300}
                    />
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
                {/* <Image
                    src='/assets/Parrot.png'
                    alt="Parrot"
                    width={360}
                    height={500}
                /> */}
                <div className={style.topBanner__parrot__members}>
                    <Image
                        src='/assets/Group29.png'
                        alt="Background"
                        width={300}
                        height={360}
                    />
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