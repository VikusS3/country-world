import { Inter } from "next/font/google";
import "./globals.css";
import "./lib/ui/animation-timeline.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paises del mundo",
  description: "Encuentra información sobre los países del mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
