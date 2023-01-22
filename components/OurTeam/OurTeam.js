import style from './OurTeam.module.scss'
import animate from './animate.module.scss'
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

export function OurTeam() {

    const { ref: headLineRef, inView: headLineIsVisible } = useInView()
    const { ref: teamRef, inView: teamIsVisible } = useInView()
    return (
        <section className={style.ourTeam}>
            <div ref={headLineRef} className={style.ourTeam__headLine}>
                <h2
                    className={headLineIsVisible
                        ? animate.animateArticle
                        : ''
                    }
                >
                    Our Top Team
                </h2>
                <p
                    className={headLineIsVisible
                        ? animate.animateParagraph
                        : ''
                    }
                >
                    Learn more about how you can save <br /> our planet's nature.
                </p>
            </div>

            <div ref={teamRef} className={style.ourTeam__galery}>
                <div
                    className={`${teamIsVisible
                        ? animate.animateTeam
                        : ''} 
                        ${style.ourTeam__galery__images}
                    `}
                >
                    <div className={style.one}>
                        <Image
                            src='/assets/img1.png'
                            alt="team player"
                            width={180}
                            height={150}
                        />
                    </div>

                    <svg className={style.svg1} viewBox="0 0 394 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.6" d="M1.18344 146.518C17.7194 166.216 112.263 184.868 162.759 177.523C213.254 170.178 226.381 123.867 217.911 113.013C213.888 105.58 200.458 102.314 194.613 109.442C186.543 119.284 191.813 128.06 198.863 135.708C208.839 146.53 282.023 142.688 325.828 117.54C372.847 90.5454 409.163 46.2362 386.348 1.05649" stroke="black" strokeDasharray="4 4" />
                    </svg>

                    <div className={style.two}>
                        <Image
                            src='/assets/img2.png'
                            alt="team player"
                            width={180}
                            height={150}
                        />
                    </div>


                    <svg className={style.svg2} viewBox="0 0 394 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.6" d="M1.18344 33.4823C17.7194 13.7838 112.263 -4.86829 162.759 2.47673C213.254 9.82175 226.381 56.133 217.911 66.9871C213.888 74.4202 200.458 77.6858 194.613 70.5584C186.543 60.7165 191.813 51.9398 198.863 44.2917C208.839 33.4699 282.023 37.3118 325.828 62.4603C372.847 89.4546 409.163 133.764 386.348 178.944" stroke="black" strokeDasharray="4 4" />
                    </svg>


                    <div className={style.three}>
                        <Image
                            src='/assets/img3.png'
                            alt="team player"
                            width={150}
                            height={180}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}