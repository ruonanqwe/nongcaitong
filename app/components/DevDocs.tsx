"use client"
import { Button } from "@/components/ui/button"
import { FileText, Code, BookOpen } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function DevDocs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="devdocs" className="py-20 bg-green-100 rounded-lg" ref={ref}>
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">开发者文档</h2>
        <p className="text-lg text-green-700 mb-12 text-center max-w-2xl mx-auto">
          我们提供全面的API和SDK文档，帮助开发者将农财通集成到他们的应用程序中。探索我们的资源，开始构建创新的农业金融解决方案。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <FileText className="h-16 w-16 text-green-600 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-green-800 mb-4">API 文档</h3>
            <p className="text-green-700 mb-6">详细的API参考和使用指南，帮助您快速集成我们的服务。</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">查看 API 文档</Button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Code className="h-16 w-16 text-green-600 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-green-800 mb-4">SDK</h3>
            <p className="text-green-700 mb-6">多种编程语言的SDK和代码示例，简化您的开发过程。</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">下载 SDK</Button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <BookOpen className="h-16 w-16 text-green-600 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold text-green-800 mb-4">开发者指南</h3>
            <p className="text-green-700 mb-6">集成最佳实践和教程，帮助您充分利用农财通的功能。</p>
            <Button className="w-full bg-green-600 hover:bg-green-700">阅读指南</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

