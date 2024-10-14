import { Header } from "@/components/admin/Header";
import { Sidebar } from "@/components/admin/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex h-full">
        <Sidebar className="w-[220px] lg:w-[280px] flex-shrink-0 overflow-y-auto" />
        <div className="flex flex-col flex-grow overflow-hidden">
          <Header className="flex-shrink-0" />
          <main className="flex-grow overflow-y-auto p-4 lg:p-6">
            <div className="flex flex-col gap-4 lg:gap-6 py-10">{children}</div>
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
