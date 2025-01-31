"use client"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Share2 } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Community() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="community" className="py-20" ref={ref}>
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">加入我们的社区</h2>
        <p className="text-lg text-green-700 mb-12 text-center max-w-2xl mx-auto">
          加入农财通社区，与其他农民和农业专家分享经验，讨论最佳实践，并获取最新的农业财务管理技巧。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <Users className="h-16 w-16 text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-green-800 mb-3">用户论坛</h3>
            <p className="text-green-700 mb-4">加入我们的在线论坛，讨论农业财务管理的各个方面。</p>
            <Button className="bg-green-600 hover:bg-green-700">访问论坛</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <MessageSquare className="h-16 w-16 text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-green-800 mb-3">在线交流</h3>
            <p className="text-green-700 mb-4">参与实时讨论，获得专家和其他用户的即时帮助。</p>
            <Button className="bg-green-600 hover:bg-green-700">加入聊天</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <Share2 className="h-16 w-16 text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-green-800 mb-3">社交媒体</h3>
            <p className="text-green-700 mb-4">在社交媒体上关注我们，获取最新动态和有用提示。</p>
            <div className="flex justify-center space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700">微信</Button>
              <Button className="bg-red-600 hover:bg-red-700">微博</Button>
              <Button className="bg-blue-400 hover:bg-blue-500">知乎</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

