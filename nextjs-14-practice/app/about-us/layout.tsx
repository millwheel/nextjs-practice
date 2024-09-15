import {Metadata} from "next";

export const metadata : Metadata = {
    title: "about us",
    description: "The best movies on the best framework",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
          {children}
          &copy; Copyright Reserved
      </div>
  )
}
