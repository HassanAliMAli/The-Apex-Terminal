import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen bg-background text-foreground font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <TopBar />
                <main className="flex-1 p-4 md:p-6 overflow-y-auto space-y-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
