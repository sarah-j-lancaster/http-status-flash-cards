import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head id="head" />
      <body>{children}</body>
    </html>
  );
}
