"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const path = usePathname();

    return (
        <aside className={styles.sidebar}>
            <Image
                src={"/checkboardDashboard.jpg"}
                alt="checkboard"
                height={1000}
                width={500}
                className={styles.overlay}
                style={{ objectFit: 'cover' }}
            />
            <nav className={styles.navList}>
                <div className={styles.navbar}>
                    <Image
                        src={"/LOGO.png"}
                        alt="LOGO"
                        width={206}
                        height={62}
                    />
                    <ul className={styles.listNavbar}>
                        <Link href="/Dashboard" className={path === "/Dashboard" ? styles.iconsActive : styles.icons}>
                            <Image
                                src={path === "/Dashboard" ? "/dashboard_icon.svg" : "/dashboardWhite_icon.svg"}
                                alt="Dashboard Icon"
                                width={30}
                                height={30}
                            />
                            Dashboard
                        </Link>
                        <Link href="/Payware" className={path === "/Payware" ? styles.iconsActive : styles.icons}>
                            <Image
                                src={path === "/Payware" ? "/paywareBlack_icon.svg" : "/paywareWhite_icon.svg"}
                                alt="Payware Icon"
                                width={30}
                                height={30}
                            />
                            Payware
                        </Link>
                        <Link href="/Freeware" className={path === "/Freeware" ? styles.iconsActive : styles.icons}>
                            <Image
                                src={path === "/Freeware" ? "/freewareBlack_icon.svg" : "/freewareWhite_icon.svg"}
                                alt="Freeware Icon"
                                width={30}
                                height={30}
                            />
                            Freeware
                        </Link>
                        <Link href="/Terms&Condition" className={path === "/Terms&Condition" ? styles.iconsActive : styles.icons}>
                            <Image
                                src={path === "/Terms&Condition" ? "/tncBlack_icon.svg" : "/tncWhite_icon.svg"}
                                alt="T&C Icon"
                                width={28}
                                height={30}
                            />
                            Terms & Condition
                        </Link>
                        <Link href="/Contact" className={path === "/Contact" ? styles.iconsActive : styles.icons}>
                            <Image
                                src={path === "/Contact" ? "/contactBlack_icon.svg" : "/contactWhite_icon.svg"}
                                alt="Contact Icon"
                                width={28}
                                height={28}
                            />
                            Contact
                        </Link>
                        <Link href="/How2Order" className={path === "/How2Order" ? styles.iconsActive : styles.icons}>
                            <Image
                                src={path === "/How2Order" ? "/h2oBlack_icon.svg" : "/h2oWhite_icon.svg"}
                                alt="H2O Icon"
                                width={28}
                                height={30}
                            />
                            How to Order
                        </Link>
                        <Link href="/FAQ" className={path === "/FAQ" ? styles.iconsActive : styles.icons}>
                            <Image
                                src={path === "/FAQ" ? "/faqBlack_icon.svg" : "/faqWhite_icon.svg"}
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
                    <Image
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

    )

}