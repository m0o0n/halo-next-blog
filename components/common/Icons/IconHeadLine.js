import { useInView } from 'react-intersection-observer';
import animate from '../../TopBanner/animate.module.scss'

export function IconHeadLine() {
    const { ref: headLineRef, inView: headLineIsVisible } = useInView()
    return (
        <svg
        ref={headLineRef}
                    className={headLineIsVisible
                        ? animate.animateHeadLine
                        : ''
                    }
                     width="543" height="293" viewBox="0 0 543 293" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83.6621 0.19043H84.6777C85.4395 0.19043 86.709 0.867513 88.4863 2.22168C81.8848 51.8604 78.584 93.1624 78.584 126.128C78.4147 126.128 78.3301 127.059 78.3301 128.921C77.3991 129.767 76.3835 130.19 75.2832 130.19H74.5215C71.3477 130.19 69.4857 127.144 68.9355 121.05V120.542C68.9355 94.0088 72.1517 54.5687 78.584 2.22168C79.8958 0.867513 81.5885 0.19043 83.6621 0.19043ZM37.7051 4.76074C39.9479 4.76074 42.6562 6.70736 45.8301 10.6006C47.3535 10.6006 48.7077 16.1019 49.8926 27.1045C54.8014 61.5511 59.7103 86.5186 64.6191 102.007C65.2962 104.504 65.6348 106.112 65.6348 106.831C64.6191 107.847 63.7728 108.354 63.0957 108.354C58.6947 108.354 55.2246 102.684 52.6855 91.3428C49.3001 78.055 45.153 57.404 40.2441 29.3896L39.7363 29.1357C39.2285 29.9398 35.7585 46.8669 29.3262 79.917C27.6335 89.5654 26.0254 101.16 24.502 114.702C23.444 115.887 22.3438 116.479 21.2012 116.479H20.6934C17.181 116.479 15.0651 114.956 14.3457 111.909C14.3457 106.535 17.985 85.7991 25.2637 49.7021L33.3887 6.03027C34.7428 5.35319 36.1816 4.93001 37.7051 4.76074Z" fill="#222433" />
                        <path d="M122.319 46.9727C126.89 46.9727 129.175 47.819 129.175 49.5117C129.344 49.8079 129.429 50.1465 129.429 50.5273V51.2891C129.429 51.7969 128.667 55.013 127.144 60.9375L120.542 89.8828H120.796C126.509 85.3125 132.349 79.3034 138.315 71.8555C145.129 63.6882 150.037 57.0866 153.042 52.0508H153.296C153.804 53.1934 154.058 54.4629 154.058 55.8594C154.058 65.7617 143.14 82.9427 121.304 107.402C120.457 107.91 119.611 108.164 118.765 108.164H118.511C114.998 108.164 112.459 105.033 110.894 98.7695C110.894 96.9499 110.809 95.6803 110.64 94.9609C110.64 92.3796 111.486 86.4551 113.179 77.1875C112.713 77.3568 109.328 82.4349 103.022 92.4219C98.0713 100.335 94.6859 105.075 92.8662 106.641L92.1045 107.148H90.3271C84.6989 107.148 80.721 103.594 78.3936 96.4844C78.2243 95.3418 78.1396 94.4108 78.1396 93.6914V91.9141C78.1396 85.778 81.3558 76.3835 87.7881 63.7305C94.0511 53.0664 99.9756 47.7344 105.562 47.7344C110.513 47.7344 114.998 49.681 119.019 53.5742H119.272C120.838 49.1732 121.854 46.9727 122.319 46.9727ZM88.8037 92.6758V93.4375C101.245 78.7956 109.285 68.2161 112.925 61.6992C112.248 58.1022 111.571 55.9017 110.894 55.0977C108.058 56.1556 104.334 59.7949 99.7217 66.0156C96.1247 71.1784 92.9085 77.8646 90.0732 86.0742C89.2269 88.8672 88.8037 91.0677 88.8037 92.6758Z" fill="#222433" />
                        <path d="M165.547 0C168.932 0 170.625 1.52344 170.625 4.57031C170.625 5.20508 170.033 9.52148 168.848 17.5195L169.355 17.7734H179.258C183.151 18.112 185.098 19.8893 185.098 23.1055C182.559 24.7982 178.242 25.6445 172.148 25.6445C172.148 25.8138 170.202 26.0677 166.309 26.4062C164.743 29.6647 163.135 37.7051 161.484 50.5273C159.792 65.2962 158.945 77.9069 158.945 88.3594V89.8828C158.945 90.7715 159.284 91.3639 159.961 91.6602H160.215C163.939 91.6602 171.641 83.8737 183.32 68.3008C188.102 61.4453 191.318 56.1133 192.969 52.3047H193.477V56.1133C193.477 65.9733 186.96 78.584 173.926 93.9453C167.07 101.309 162.415 105.71 159.961 107.148H159.707C152.725 107.148 148.747 102.07 147.773 91.9141C147.604 87.8939 147.52 85.1009 147.52 83.5352C147.52 70.0781 149.466 52.2201 153.359 29.9609V28.4375C149.424 28.9453 146.038 29.1992 143.203 29.1992C141.299 29.1992 140.114 27.8451 139.648 25.1367V24.6289C139.648 22.9362 140.579 22.0898 142.441 22.0898C151.582 20.5241 156.152 19.0853 156.152 17.7734C156.956 15.5306 158.226 10.5371 159.961 2.79297C160.469 0.93099 161.738 0 163.77 0H165.547Z" fill="#222433" />
                        <path d="M200.459 40.1172C203.506 40.6673 205.029 41.1751 205.029 41.6406V41.8945C205.029 45.1107 202.998 53.0664 198.936 65.7617C196.735 76.2565 195.635 83.4505 195.635 87.3438V91.1523C195.804 94.0299 196.143 95.4688 196.65 95.4688C197.285 95.4688 198.47 93.3529 200.205 89.1211C207.314 74.4369 213.831 62.6725 219.756 53.8281C220.602 51.8815 221.956 47.819 223.818 41.6406C224.707 40.7943 225.469 40.3711 226.104 40.3711H226.357C228.304 40.3711 230.674 42.0638 233.467 45.4492C233.467 47.0573 232.113 51.543 229.404 58.9062C226.188 75.2409 224.58 87.5977 224.58 95.9766L225.342 96.4844H225.596C229.066 94.1146 233.213 89.7135 238.037 83.2812C253.229 63.1803 261.016 52.7702 261.396 52.0508H261.904V52.8125C259.958 63.138 251.325 78.0339 236.006 97.5C229.362 104.779 224.453 108.418 221.279 108.418C217.936 108.418 215.99 105.117 215.439 98.5156V97.7539C215.439 95.5534 215.609 89.5443 215.947 79.7266V79.4727H215.693C212.139 86.0319 208.245 94.3262 204.014 104.355C202.194 106.725 200.332 107.91 198.428 107.91H197.92C193.773 107.91 190.133 103.848 187.002 95.7227C186.325 92.4219 185.986 89.7982 185.986 87.8516V86.582C185.986 76.0026 188.356 62.6302 193.096 46.4648C194.873 42.2331 197.327 40.1172 200.459 40.1172Z" fill="#222433" />
                        <path d="M257.905 39.6094H258.667C261.037 39.6094 262.222 40.1172 262.222 41.1328C263.026 46.6341 263.428 50.3792 263.428 52.3682C264.02 56.4307 266.115 58.61 269.712 58.9062C275.975 59.7949 279.953 60.472 281.646 60.9375C282.492 61.8685 282.915 62.8841 282.915 63.9844V64.4922C282.915 65.4655 281.222 71.6439 277.837 83.0273C277.16 86.5397 276.821 89.6712 276.821 92.4219V92.9297C276.821 95.8919 277.498 98.0078 278.853 99.2773H279.614C285.2 99.2773 293.41 88.3594 304.243 66.5234C308.136 57.9753 310.083 53.0664 310.083 51.7969H310.845C311.522 53.3203 311.86 54.6745 311.86 55.8594V57.8906C311.86 66.9466 307.121 79.0495 297.642 94.1992C291.167 102.663 285.243 106.895 279.868 106.895H278.853C274.409 106.895 270.77 104.355 267.935 99.2773C267.427 96.5267 267.173 94.0723 267.173 91.9141V86.0742C267.173 81.8001 268.527 75.5371 271.235 67.2852C266.877 67.2852 261.841 65.5078 256.128 61.9531C253.081 58.6947 251.558 54.6322 251.558 49.7656V48.4961C251.558 43.0794 252.404 40.3711 254.097 40.3711C254.901 39.8633 256.17 39.6094 257.905 39.6094Z" fill="#222433" />
                        <path d="M331.03 38.5938H332.808C336.151 38.5938 338.69 41.1328 340.425 46.2109L340.933 50.0195C340.933 57.0866 337.463 65.5501 330.522 75.4102C328.28 77.7799 324.725 78.9648 319.858 78.9648C312.199 78.7956 307.713 78.7109 306.401 78.7109C304.878 81.8848 304.116 85.5241 304.116 89.6289C304.116 93.6491 304.793 97.8809 306.147 102.324H306.655C320.535 102.324 337.716 86.7513 358.198 55.6055C359.891 53.4896 360.737 52.2201 360.737 51.7969H361.245C361.584 52.8971 361.753 53.6589 361.753 54.082V55.0977C361.753 64.3652 354.22 77.1452 339.155 93.4375C332.892 98.6849 329.676 101.309 329.507 101.309C322.397 105.879 316.642 108.164 312.241 108.164H309.956C303.439 108.164 298.615 104.44 295.483 96.9922C294.637 93.0143 294.214 89.6289 294.214 86.8359C294.214 72.9134 301.916 58.7793 317.319 44.4336C323.075 40.5404 327.645 38.5938 331.03 38.5938ZM309.448 73.3789V73.6328H310.464C317.15 73.6328 322.736 70.6706 327.222 64.7461C331.284 57.1289 333.315 50.3581 333.315 44.4336C325.402 48.2845 317.7 57.002 310.21 70.5859C309.702 71.7285 309.448 72.6595 309.448 73.3789Z" fill="#222433" />
                        <path d="M45.1953 173.402C50.1042 174.46 52.5586 175.73 52.5586 177.211V177.973C52.5586 183.474 48.6654 199.132 40.8789 224.945V225.707C41.0905 226.553 41.3444 226.977 41.6406 226.977C43.6719 226.977 48.9193 221.137 57.3828 209.457C62.9688 201.163 68.5547 192.361 74.1406 183.051H74.3945C74.7331 184.32 74.9023 185.505 74.9023 186.605V188.637C74.9023 201.078 64.4922 218.09 43.6719 239.672C41.8945 241.28 39.7786 243.142 37.3242 245.258H37.0703C34.3197 245.258 31.7806 244.073 29.4531 241.703C29.4531 229.219 31.7383 213.139 36.3086 193.461C36.4779 192.615 36.5625 191.514 36.5625 190.16V189.906C30.0456 196.042 25.4753 201.713 22.8516 206.918C19.8047 212.165 15.9115 220.883 11.1719 233.07C9.52148 236.244 8.25195 238.021 7.36328 238.402H6.60156C2.20052 237.133 0 234.001 0 229.008C0 219.571 3.38542 201.882 10.1562 175.941C11.8913 175.434 13.4993 175.18 14.9805 175.18C18.0273 175.391 19.5508 176.745 19.5508 179.242C19.5508 181.485 17.9427 188.425 14.7266 200.062C13.2031 205.987 12.4414 210.557 12.4414 213.773V214.027H12.6953C21.0319 197.777 28.1413 186.267 34.0234 179.496C37.9167 175.434 41.6406 173.402 45.1953 173.402Z" fill="#222433" />
                        <path d="M92.6123 169.594H94.3896C97.7327 169.594 100.272 172.133 102.007 177.211L102.515 181.02C102.515 188.087 99.0446 196.55 92.1045 206.41C89.8617 208.78 86.307 209.965 81.4404 209.965C73.7809 209.796 69.2952 209.711 67.9834 209.711C66.46 212.885 65.6982 216.524 65.6982 220.629C65.6982 224.649 66.3753 228.881 67.7295 233.324H68.2373C82.1175 233.324 99.2985 217.751 119.78 186.605C121.473 184.49 122.319 183.22 122.319 182.797H122.827C123.166 183.897 123.335 184.659 123.335 185.082V186.098C123.335 195.365 115.802 208.145 100.737 224.438C94.4743 229.685 91.2581 232.309 91.0889 232.309C83.9795 236.879 78.2243 239.164 73.8232 239.164H71.5381C65.0212 239.164 60.1969 235.44 57.0654 227.992C56.2191 224.014 55.7959 220.629 55.7959 217.836C55.7959 203.913 63.4977 189.779 78.9014 175.434C84.6566 171.54 89.2269 169.594 92.6123 169.594ZM71.0303 204.379V204.633H72.0459C78.7321 204.633 84.318 201.671 88.8037 195.746C92.8662 188.129 94.8975 181.358 94.8975 175.434C86.984 179.285 79.2822 188.002 71.792 201.586C71.2842 202.729 71.0303 203.66 71.0303 204.379Z" fill="#222433" />
                        <path d="M139.585 169.594H141.362C144.705 169.594 147.244 172.133 148.979 177.211L149.487 181.02C149.487 188.087 146.017 196.55 139.077 206.41C136.834 208.78 133.28 209.965 128.413 209.965C120.754 209.796 116.268 209.711 114.956 209.711C113.433 212.885 112.671 216.524 112.671 220.629C112.671 224.649 113.348 228.881 114.702 233.324H115.21C129.09 233.324 146.271 217.751 166.753 186.605C168.446 184.49 169.292 183.22 169.292 182.797H169.8C170.138 183.897 170.308 184.659 170.308 185.082V186.098C170.308 195.365 162.775 208.145 147.71 224.438C141.447 229.685 138.231 232.309 138.062 232.309C130.952 236.879 125.197 239.164 120.796 239.164H118.511C111.994 239.164 107.17 235.44 104.038 227.992C103.192 224.014 102.769 220.629 102.769 217.836C102.769 203.913 110.47 189.779 125.874 175.434C131.629 171.54 136.2 169.594 139.585 169.594ZM118.003 204.379V204.633H119.019C125.705 204.633 131.291 201.671 135.776 195.746C139.839 188.129 141.87 181.358 141.87 175.434C133.957 179.285 126.255 188.002 118.765 201.586C118.257 202.729 118.003 203.66 118.003 204.379Z" fill="#222433" />
                        <path d="M203.569 131H204.585C208.478 131 210.425 133.031 210.425 137.094C210.425 139.379 207.293 153.513 201.03 179.496C197.983 193.249 196.46 204.675 196.46 213.773V218.598C196.46 219.444 196.545 220.714 196.714 222.406C203.442 217.328 210.552 210.049 218.042 200.57C223.332 193.546 227.31 187.621 229.976 182.797H230.737C231.245 183.812 231.499 184.49 231.499 184.828V186.098C230.314 196.254 220.666 212.504 202.554 234.848C200.353 237.387 197.983 238.656 195.444 238.656C190.197 238.656 187.573 231.632 187.573 217.582V214.281C187.573 212.842 187.658 210.557 187.827 207.426C186.938 207.68 183.468 213.604 177.417 225.199C172.804 234.678 168.149 239.418 163.452 239.418H162.69C158.205 239.418 155.243 235.102 153.804 226.469C153.634 225.495 153.55 224.141 153.55 222.406C153.55 208.314 158.628 193.419 168.784 177.719C171.45 173.995 174.328 172.133 177.417 172.133C183.172 172.133 186.981 174.333 188.843 178.734C189.181 180.977 189.689 182.755 190.366 184.066H190.62L197.729 152.582C199.93 138.194 201.877 131 203.569 131ZM161.421 224.945C161.421 226.68 161.759 228.796 162.437 231.293H162.944C166.711 228.077 169.334 224.438 170.815 220.375C179.66 204.125 184.653 194.561 185.796 191.684V191.176C183.088 190.245 181.733 187.96 181.733 184.32C181.733 180.596 181.479 178.734 180.972 178.734C177.756 178.734 173.185 185.421 167.261 198.793C163.368 209.076 161.421 217.794 161.421 224.945Z" fill="#222433" />
                        <path d="M236.577 165.531H237.847C244.067 165.531 247.791 168.07 249.019 173.148C247.876 174.714 246.522 175.645 244.956 175.941C244.025 175.772 243.263 175.688 242.671 175.688C239.878 175.688 237.931 176.618 236.831 178.48C234.969 180.089 234.038 181.612 234.038 183.051V183.559C234.038 185.209 235.138 186.225 237.339 186.605C239.285 186.605 244.025 189.06 251.558 193.969C263.195 186.69 274.113 183.051 284.312 183.051C284.312 182.882 284.904 182.797 286.089 182.797L286.343 183.305L266.03 193.715C262.052 196.085 258.498 198.793 255.366 201.84C254.012 203.279 253.335 206.918 253.335 212.758C251.304 220.671 249.103 226.765 246.733 231.039C241.951 239.841 237.127 244.242 232.261 244.242C228.029 244.242 224.559 241.449 221.851 235.863V235.102C221.851 227.696 227.606 217.624 239.116 204.887C242.163 202.644 243.687 200.359 243.687 198.031C243.687 195.111 239.878 192.742 232.261 190.922C226.675 188.425 223.882 184.786 223.882 180.004V178.988C223.882 174.672 227.098 170.271 233.53 165.785L236.577 165.531ZM232.769 231.801C236.154 229.008 238.608 224.522 240.132 218.344C236.154 222.829 233.7 227.315 232.769 231.801Z" fill="#222433" />
                        <path d="M332.808 174.926C335.685 174.926 337.124 176.618 337.124 180.004V180.766C332.977 203.998 330.861 219.571 330.776 227.484H331.03C331.707 227.484 333.231 225.03 335.601 220.121C341.229 209.076 349.1 197.82 359.214 186.352C365.35 178.734 370.09 174.926 373.433 174.926C375.083 174.926 376.437 175.941 377.495 177.973C373.602 194.815 370.724 206.072 368.862 211.742H369.116C370.005 211.742 381.769 202.094 404.409 182.797H404.663C404.663 191.133 392.052 205.098 366.831 224.691C365.435 225.749 363.911 228.881 362.261 234.086C354.305 252.156 345.164 268.406 334.839 282.836C329.845 289.438 325.275 292.738 321.128 292.738H320.112C317.108 292.738 314.399 291.13 311.987 287.914C311.987 278.096 322.736 259.138 344.233 231.039C344.445 230.489 348.592 225.834 356.675 217.074C358.621 213.9 360.229 208.992 361.499 202.348C362.007 200.443 362.261 198.581 362.261 196.762C361.457 196.846 358.579 200.74 353.628 208.441C349.481 213.9 344.149 223.633 337.632 237.641C334.881 241.703 332.342 243.734 330.015 243.734C324.259 242.169 321.382 239.376 321.382 235.355C321.17 235.355 320.916 233.832 320.62 230.785L320.874 229.516V227.738C320.874 226.511 321.636 219.486 323.159 206.664C325.063 186.521 326.841 176.449 328.491 176.449C329.168 175.434 330.607 174.926 332.808 174.926ZM323.921 279.789H324.175C327.603 276.615 330.819 272.722 333.823 268.109C343.514 252.96 349.523 242.38 351.851 236.371C348.381 238.445 344.149 243.015 339.155 250.082C328.999 266.755 323.921 276.658 323.921 279.789Z" fill="#222433" />
                        <path d="M437.29 166.801C444.357 167.351 450.959 170.144 457.095 175.18C460.142 178.65 461.665 182.543 461.665 186.859C461.665 196.635 454.81 209.076 441.099 224.184C432.254 233.832 423.791 238.656 415.708 238.656C408.175 238.656 402.251 234.001 397.935 224.691C396.242 219.91 395.396 215.339 395.396 210.98C395.396 205.521 397.004 197.65 400.22 187.367C400.389 186.775 400.474 186.436 400.474 186.352L400.22 185.844C400.22 183.939 403.267 178.692 409.36 170.102C411.349 168.24 412.873 167.309 413.931 167.309H415.2L422.31 169.594H423.325C430.011 167.732 434.666 166.801 437.29 166.801ZM404.536 215.297V217.836C404.536 227.484 407.244 232.309 412.661 232.309C417.231 232.309 425.103 226.384 436.274 214.535C446.938 201.163 452.271 190.583 452.271 182.797V182.289C452.271 178.438 450.409 175.984 446.685 174.926C446.007 174.587 445.077 174.418 443.892 174.418H441.353C437.121 174.418 429.757 176.026 419.263 179.242C415.327 181.146 412.788 183.516 411.646 186.352C406.906 197.481 404.536 207.13 404.536 215.297Z" fill="#222433" />
                        <path d="M481.279 171.117C484.326 171.667 485.85 172.175 485.85 172.641V172.895C485.85 176.111 483.818 184.066 479.756 196.762C477.555 207.257 476.455 214.451 476.455 218.344V222.152C476.624 225.03 476.963 226.469 477.471 226.469C478.105 226.469 479.29 224.353 481.025 220.121C488.135 205.437 494.652 193.673 500.576 184.828C501.423 182.882 502.777 178.819 504.639 172.641C505.527 171.794 506.289 171.371 506.924 171.371H507.178C509.124 171.371 511.494 173.064 514.287 176.449C514.287 178.057 512.933 182.543 510.225 189.906C507.008 206.241 505.4 218.598 505.4 226.977L506.162 227.484H506.416C509.886 225.115 514.033 220.714 518.857 214.281C534.049 194.18 541.836 183.77 542.217 183.051H542.725V183.812C540.778 194.138 532.145 209.034 516.826 228.5C510.182 235.779 505.273 239.418 502.1 239.418C498.757 239.418 496.81 236.117 496.26 229.516V228.754C496.26 226.553 496.429 220.544 496.768 210.727V210.473H496.514C492.959 217.032 489.066 225.326 484.834 235.355C483.014 237.725 481.152 238.91 479.248 238.91H478.74C474.593 238.91 470.954 234.848 467.822 226.723C467.145 223.422 466.807 220.798 466.807 218.852V217.582C466.807 207.003 469.176 193.63 473.916 177.465C475.693 173.233 478.148 171.117 481.279 171.117Z" fill="#222433" />
                        <path d="M452.125 256.909C473.425 257.309 484.125 258.909 484.125 261.809V262.509C484.125 264.309 458.925 263.809 449.825 263.809C440.725 263.809 422.325 250.009 412.825 250.009C403.325 250.009 396.125 266.309 379.925 266.309C363.725 266.309 349.325 256.309 339.325 253.909C320.825 249.509 295.125 265.309 295.125 262.009V257.309C295.125 254.909 320.125 245.909 337.125 246.409C342.725 246.209 359.525 259.909 380.225 259.609C387.625 259.509 404.625 243.509 412.625 243.409C429.225 243.209 437.225 257.009 452.125 256.909Z" fill="#222433" />
                    </svg>

    )
}