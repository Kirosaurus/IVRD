import { Button } from '@/components/ui/button';
import styles from '../../css/dashboard.module.css';

export default function Dashboard() {
    return (
        <div className={styles.mainDashboard}>
            <div style={{display : "flex", alignItems : "center", gap : "10px"}}>
                <button className={styles.sidebarButton}>
                    <img
                        src="menu.svg"
                        height={30}
                        width={30}
                    />
                </button>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.announce}>
                <p>Ini Buat Announcement</p>
            </div>
            <div>
                <h2>New Product</h2>
            </div>
            <div className={styles.listProduct}>
                <div className={styles.product}>
                    <div className={styles.thumbnailProduct}>
                        <p>s</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnailProduct}>
                        <p>s</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnailProduct}>
                        <p>s</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.thumbnailProduct}>
                        <p>s</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
