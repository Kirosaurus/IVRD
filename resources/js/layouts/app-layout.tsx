import type { BreadcrumbItem } from '@/types';
import Sidebar from '@/components/newSidebar';
import styles from '../../css/layout.module.css'

export default function AppLayout({
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <main
            className="min-h-screen bg-white"
            style={{ background: 'linear-gradient(150deg, #25343F, #545454)' }}>
            <img
                className={styles.backgroundImg}
                src="body_background.png"
            />
            <div style={{display : "flex"}}>
                <Sidebar></Sidebar>
                {children}
            </div>
        </main>
    );
}
