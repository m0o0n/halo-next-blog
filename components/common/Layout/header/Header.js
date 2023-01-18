import Image from 'next/image'
import style from './Header.module.scss'

export function Header() {
    return (
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
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5C0 0.671573 0.671573 0 1.5 0H20.5C21.3284 0 22 0.671573 22 1.5C22 2.32843 21.3284 3 20.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM5 8.5C5 7.67157 5.67157 7 6.5 7H20.5C21.3284 7 22 7.67157 22 8.5C22 9.32843 21.3284 10 20.5 10H6.5C5.67157 10 5 9.32843 5 8.5ZM1.5 14C0.671573 14 0 14.6716 0 15.5C0 16.3284 0.671573 17 1.5 17H20.5C21.3284 17 22 16.3284 22 15.5C22 14.6716 21.3284 14 20.5 14H1.5Z" fill="black" />
                </svg>


            </div>
            <div className={style.header__mobileNav}>
                <div className={style.header__mobileNav_close}></div>
                <nav>
                    <span>Home</span>
                    <span>Our mission</span>
                    <span>Places</span>
                    <span>Team</span>
                </nav>
                <div className={style.header__action}>Apply</div>
            </div>
        </header>
    )
}