import { Link, usePage } from '@inertiajs/react';
import styles from '../../css/page.module.css';

export default function Sidebar() {
    const { url } = usePage();

    return (
        <aside className={styles.sidebar}>
            <img
                src={"/checkboardDashboard.jpg"}
                alt="checkboard"
                height={1000}
                width={500}
                className={styles.overlay}
                style={{ objectFit: 'cover' }}
            />
            <nav className={styles.navList}>
                <div className={styles.navbar}>
                    <img
                        src={"/LOGO.png"}
                        alt="LOGO"
                        width={206}
                        height={62}
                    />
                    <ul className={styles.listNavbar}>
                        <Link href="/dashboard" className={url === "/dashboard" ? styles.iconsActive : styles.icons}>
                            <img
                                src={url === "/dashboard" ? "/dashboard_icon.svg" : "/dashboardWhite_icon.svg"}
                                alt="Dashboard Icon"
                                width={30}
                                height={30}
                            />
                            Dashboard
                        </Link>
                        <Link href="/payware" className={url === "/payware" ? styles.iconsActive : styles.icons}>
                            <img
                                src={url === "/payware" ? "/paywareBlack_icon.svg" : "/paywareWhite_icon.svg"}
                                alt="Payware Icon"
                                width={30}
                                height={30}
                            />
                            Payware
                        </Link>
                        <Link href="/Freeware" className={url === "/Freeware" ? styles.iconsActive : styles.icons}>
                            <img
                                src={url === "/Freeware" ? "/freewareBlack_icon.svg" : "/freewareWhite_icon.svg"}
                                alt="Freeware Icon"
                                width={30}
                                height={30}
                            />
                            Freeware
                        </Link>
                        <Link href="/Terms&Condition" className={url === "/Terms&Condition" ? styles.iconsActive : styles.icons}>
                            <img
                                src={url === "/Terms&Condition" ? "/tncBlack_icon.svg" : "/tncWhite_icon.svg"}
                                alt="T&C Icon"
                                width={28}
                                height={30}
                            />
                            Terms & Condition
                        </Link>
                        <Link href="/Contact" className={url === "/Contact" ? styles.iconsActive : styles.icons}>
                            <img
                                src={url === "/Contact" ? "/contactBlack_icon.svg" : "/contactWhite_icon.svg"}
                                alt="Contact Icon"
                                width={28}
                                height={28}
                            />
                            Contact
                        </Link>
                        <Link href="/How2Order" className={url === "/How2Order" ? styles.iconsActive : styles.icons}>
                            <img
                                src={url === "/How2Order" ? "/h2oBlack_icon.svg" : "/h2oWhite_icon.svg"}
                                alt="H2O Icon"
                                width={28}
                                height={30}
                            />
                            How to Order
                        </Link>
                        <Link href="/FAQ" className={url === "/FAQ" ? styles.iconsActive : styles.icons}>
                            <img
                                src={url === "/FAQ" ? "/faqBlack_icon.svg" : "/faqWhite_icon.svg"}
                                alt="FAQ Icon"
                                width={30}
                                height={30}
                            />
                            Freeware
                        </Link>
                    </ul>
                </div>

            </nav>
            <div className={styles.bottom}>
                <a>
                    Social Media :
                </a>
                <div className={styles.facebookName}>
                    <img
                        src={"/facebook_icon.svg"}
                        alt=""
                        width={30}
                        height={30}
                    />
                    <a>
                        Indonesia Virtual <br></br>Railway Division
                    </a>
                </div>
                <a className={styles.copyrightSign}>
                    © IVRD Copyright 2026
                </a>
            </div>
        </aside>
    );
}
