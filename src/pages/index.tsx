import { Inter } from "next/font/google"
import { Header } from "@/components/Header"
import { AttendeeList } from "@/components/AttendeeList"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${inter.className} max-w-[1216px] mx-auto py-5 flex flex-col gap-5`}>
      <Header />
      <AttendeeList />
    </main>
  )
}
