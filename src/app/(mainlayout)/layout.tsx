import Container from "../components/Shared/Container";
import Header from "../components/Shared/Header/Header";
import LeftSidebar from "../components/Shared/LeftSidebar";
import RightSidebar from "../components/Shared/RightSidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="">
        <Header />
      </div>

      <Container className="mt-4">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-3 col-span-12">
            <LeftSidebar />
            <div className="md:hidden block">
              <RightSidebar />
            </div>
          </div>
          <div className="lg:col-span-6  col-span-12">{children}</div>
          <div className="lg:col-span-3  col-span-12 hidden md:block">
            <RightSidebar />
          </div>
        </div>
      </Container>
    </div>
  );
}
