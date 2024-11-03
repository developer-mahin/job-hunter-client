import Container from "../components/Shared/Container";
import Header from "../components/Shared/Header/Header";
import RightSidebar from "../components/Shared/RightSidebar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-wrap py-3">
          <div className="w-full md:w-3/4 p-0 lg:p-2">{children}</div>
          <div className="w-full md:w-1/4 p-0 lg:p-2 mt-3 md:mt-0 lg:block hidden">
            <RightSidebar />
          </div>
        </div>
      </Container>
    </div>
  );
}
