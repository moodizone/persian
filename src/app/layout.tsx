import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Content from "@/layout/content";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className=" bg-alabaster text-mine-shaft flex flex-col w-full h-full">
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
