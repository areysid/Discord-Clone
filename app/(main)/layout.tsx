import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ModalProvider } from "@/components/providers/modal-provider";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full">
        <ModalProvider />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;