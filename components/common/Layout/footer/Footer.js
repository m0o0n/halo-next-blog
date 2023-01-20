import { IconFaceBook } from "../../Icons/IconFaceBook"
import { IconLinkedIn } from "../../Icons/IconLinkedIn"
import { IconTwiter } from "../../Icons/IconTwiter"
import style from "./Footer.module.scss"
export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer__contacts}>
                <h2>Contacts</h2>
                <p>2019 Rootz Foundation. All rights reserved
                </p>
            </div>

            <div className={style.footer__media_group}>

                <div className={style.footer__contacts}>
                    <h2>Contacts</h2>
                    <p>2019 Rootz Foundation.
                        <br /> All rights reserved
                    </p>
                </div>

                <div className={style.footer__headquarters}>
                    <h2>Headquarters</h2>
                    <p>1234 Taliban
                        <br />Los Angeles,
                        <br /> La 1234567
                        <br />(123) 456-7890
                    </p>
                </div>

                <div className={style.footer__social}>
                    <h2>Social media</h2>
                    <div>
                        <IconTwiter />
                        <IconFaceBook />
                        <IconLinkedIn />
                    </div>
                </div>
            </div>
        </footer>
    )
}