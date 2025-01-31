import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-white/10">
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          农财通
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/download" className="text-white hover:text-white/80">
            下载
          </Link>
          <Link href="/community" className="text-white hover:text-white/80">
            社区
          </Link>
          <Link href="/docs" className="text-white hover:text-white/80">
            开发者文档
          </Link>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#1B5E20]">
            登录
          </Button>
        </div>
      </div>
    </nav>
  )
}

