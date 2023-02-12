import "./globals.css";
import Background from "./background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="relative w-full h-full">
        <Background />
        <main>{children}</main>
      </body>
    </html>
  );
}
