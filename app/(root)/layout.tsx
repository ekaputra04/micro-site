import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-16 lg:px-32 xl:px-48 py-8">{children}</div>
      <Footer />
    </>
  );
}
