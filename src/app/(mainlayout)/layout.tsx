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
          <div className="col-span-3">
            <LeftSidebar />
          </div>
          <div className="col-span-6">{children}</div>
          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </Container>
    </div>
  );
}
