import { Link, usePage } from '@inertiajs/react';
import styles from '../../css/page.module.css';

export default function Sidebar() {
    const { url } = usePage();

    return (
        <aside className={styles.sidebar}>
            <img
                src="/checkboardDashboard.jpg"
                alt="checkboard"
                className={styles.overlay}
            />

            <nav className={styles.navList}>
                <div className={styles.navbar}>
                    <img
                        src="/LOGO.png"
                        alt="LOGO"
                        width={206}
                        height={62}
                    />

                    <ul className={styles.listNavbar}>
                        <Link href="/dashboard" className={url === "/dashboard" ? styles.iconsActive : styles.icons}>
                            Dashboard
                        </Link>

                        <Link href="/payware" className={url === "/payware" ? styles.iconsActive : styles.icons}>
                            Payware
                        </Link>

                        <Link href="/freeware" className={url === "/freeware" ? styles.iconsActive : styles.icons}>
                            Freeware
                        </Link>

                        <Link href="/terms-condition" className={url === "/terms-condition" ? styles.iconsActive : styles.icons}>
                            Terms & Condition
                        </Link>

                        <Link href="/contact" className={url === "/contact" ? styles.iconsActive : styles.icons}>
                            Contact
                        </Link>

                        <Link href="/how-to-order" className={url === "/how-to-order" ? styles.iconsActive : styles.icons}>
                            How to Order
                        </Link>

                        <Link href="/faq" className={url === "/faq" ? styles.iconsActive : styles.icons}>
                            FAQ
                        </Link>
                    </ul>
                </div>
            </nav>

            <div className={styles.bottom}>
                <p>Social Media :</p>

                <div className={styles.facebookName}>
                    <img src="/facebook_icon.svg" alt="" width={30} height={30} />
                    <p>
                        Indonesia Virtual <br />
                        Railway Division
                    </p>
                </div>

                <p className={styles.copyrightSign}>
                    © IVRD Copyright 2026
                </p>
            </div>
        </aside>
    );
}