// src/app/layout.tsx
import "../styles/globals.css";
import ClientProvider from "../components/ClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClientProvider>
  );
}
