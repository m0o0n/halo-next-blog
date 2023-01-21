import Image from 'next/image'
import { useState } from 'react'
import style from './Header.module.scss'

export function Header() {

    const [mobileNavIsActive, setMobileNavIsActive] = useState(true)

    const swichMobileNav = () => {
        setMobileNavIsActive(!mobileNavIsActive)
        if(mobileNavIsActive){
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = 'visible'
        }
        
    }
    return (
        <>
            <header className={style.header}>
                <div className={style.header__logo}>
                    <Image
                        src="/assets/Logo.png"
                        alt="Logo"
                        width={320}
                        height={70}
                    />
                </div>
                <nav className={style.header__navigate}>
                    <span>Home</span>
                    <span>Our mission</span>
                    <span>Places</span>
                    <span>Team</span>
                </nav>
                <div className={style.header__action}>Apply</div>
                <div className={style.header__bars}>
                    {mobileNavIsActive
                        ? <svg onClick={() => { swichMobileNav(!mobileNavIsActive) }} width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5C0 0.671573 0.671573 0 1.5 0H20.5C21.3284 0 22 0.671573 22 1.5C22 2.32843 21.3284 3 20.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM5 8.5C5 7.67157 5.67157 7 6.5 7H20.5C21.3284 7 22 7.67157 22 8.5C22 9.32843 21.3284 10 20.5 10H6.5C5.67157 10 5 9.32843 5 8.5ZM1.5 14C0.671573 14 0 14.6716 0 15.5C0 16.3284 0.671573 17 1.5 17H20.5C21.3284 17 22 16.3284 22 15.5C22 14.6716 21.3284 14 20.5 14H1.5Z" fill="black" />
                        </svg> :
                        <svg onClick={() => { swichMobileNav(!mobileNavIsActive) }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.541507 13.5071C-0.0245953 14.0774 -0.024595 15.002 0.541507 15.5723C1.10761 16.1425 2.02544 16.1425 2.59155 15.5723L7.99984 10.1241L13.4081 15.5723C13.9742 16.1426 14.8921 16.1426 15.4582 15.5723C16.0243 15.002 16.0243 14.0774 15.4582 13.5071L10.0499 8.05889L15.5751 2.49287C16.1412 1.9226 16.1412 0.997989 15.5751 0.427709C15.009 -0.142571 14.0912 -0.142569 13.5251 0.427711L7.99984 5.99372L2.47461 0.427722C1.90851 -0.142558 0.990677 -0.142557 0.424576 0.427722C-0.141526 0.998002 -0.141525 1.92261 0.424577 2.49289L5.9498 8.05889L0.541507 13.5071Z" fill="black" />
                        </svg>
                    }
                </div>

            </header>
            {mobileNavIsActive ? null
                : <div className={style.mobileNav}>
                    <div className={style.mobileNav__close}></div>
                    <nav>
                        <span>Home</span>
                        <span>Our mission</span>
                        <span>Places</span>
                        <span>Team</span>
                    </nav>
                    <div className={style.mobileNav__action}>Apply</div>
                </div>}

        </>
    )
}