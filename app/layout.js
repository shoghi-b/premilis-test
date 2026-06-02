import "./globals.css";
import { Figtree } from "next/font/google";
import AgentationProvider from "./agentation-provider";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Premilis App",
  description: "Next.js app scaffold for design iterations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} ${figtree.variable}`}>
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
