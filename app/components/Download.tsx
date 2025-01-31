"use client"
import { Button } from "@/components/ui/button"
import { DownloadIcon, Monitor, Smartphone } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Download() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="download" className="py-20 bg-green-100 rounded-lg" ref={ref}>
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">下载农财通</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-green-700 mb-6">
              选择适合您设备的版本，开始使用农财通提升您的农业财务管理效率。我们的应用支持多平台，确保您随时随地都能访问您的财务数据。
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                <Monitor className="mr-2 h-5 w-5" /> 下载桌面版（Windows / macOS）
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                <Smartphone className="mr-2 h-5 w-5" /> 下载移动版（iOS / Android）
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src="/placeholder.svg?height=400&width=600" alt="农财通多平台展示" className="rounded-lg shadow-xl" />
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-lg">
              <DownloadIcon className="h-12 w-12 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

