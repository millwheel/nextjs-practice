import Navigation from "../component/navigation";
import {Metadata} from "next";

export const metadata : Metadata = {
  title: {
    template: "%s | NextJS",
    default: "Loading..."
  },
  description: "The best movies on the best framework",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
         <Navigation/>
         {children}
       </body>
    </html>
  )
}
