import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1B5E20]">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">联系我们</h1>
        <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                姓名
              </label>
              <Input
                id="name"
                className="w-full bg-white/20 text-white placeholder-white/50"
                placeholder="请输入您的姓名"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                邮箱
              </label>
              <Input
                id="email"
                type="email"
                className="w-full bg-white/20 text-white placeholder-white/50"
                placeholder="请输入您的邮箱"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                留言
              </label>
              <Textarea
                id="message"
                className="w-full bg-white/20 text-white placeholder-white/50"
                placeholder="请输入您的留言"
                rows={4}
              />
            </div>
            <Button className="w-full bg-white text-[#1B5E20] hover:bg-white/90">提交</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

