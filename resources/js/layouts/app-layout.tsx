import type { BreadcrumbItem } from '@/types';
import Sidebar from '@/components/newSidebar';


export default function AppLayout({
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-white">
            <Sidebar></Sidebar>
            {children}
        </main>
    );
}