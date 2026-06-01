import AppSidebar from "@/components/app/AppSidebar";
import AppTopbar from "@/components/app/AppTopbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-app-bg text-app-text">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
