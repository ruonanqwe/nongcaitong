import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { BarChart2, CloudCog, Coins, Sprout } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      icon: <BarChart2 className="h-12 w-12 text-white mb-4" />,
      title: "智能分析系统",
      description: "利用AI技术，深入分析您的农场数据，提供actionable insights。",
    },
    {
      icon: <CloudCog className="h-12 w-12 text-white mb-4" />,
      title: "云端管理平台",
      description: "随时随地访问您的数据，多设备无缝同步，保障数据安全。",
    },
    {
      icon: <Coins className="h-12 w-12 text-white mb-4" />,
      title: "财务优化工具",
      description: "智能预算管理，税收优化建议，最大化您的农场利润。",
    },
    {
      icon: <Sprout className="h-12 w-12 text-white mb-4" />,
      title: "作物管理系统",
      description: "从种植到收获，全程跟踪每一个环节，优化产量和质量。",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1B5E20]">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">产品服务</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              {product.icon}
              <h2 className="text-2xl font-bold text-white mb-4">{product.title}</h2>
              <p className="text-white/80 mb-6">{product.description}</p>
              <Button className="w-full bg-white text-[#1B5E20] hover:bg-white/90">了解更多</Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

