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
            <div className={style.header__bars}></div>
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