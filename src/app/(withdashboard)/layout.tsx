import Header from "../components/Shared/Header/Header";
import Sidebar from "./recruiter/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex text-black bg-white w-full">
        <div>
          <Sidebar />
        </div>
        <div className="h-full w-full  flex-1">
          <div className="py-10 px-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
