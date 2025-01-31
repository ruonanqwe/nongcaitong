import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1B5E20]">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">关于农财通</h1>
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-white">
          <p className="mb-6">
            农财通是一家致力于为现代农业提供智能财务管理解决方案的科技公司。我们的使命是通过创新的技术手段，帮助农场主和农业企业提高经营效率，优化资源配置，实现可持续发展。
          </p>
          <p className="mb-6">
            成立于2020年，农财通汇集了一批来自农业、金融和技术领域的专家。我们深知农业经营的独特性和复杂性，因此开发了专门针对农业领域的财务管理系统。我们的产品不仅仅是一个记账工具，更是一个集成了数据分析、预测模型和决策支持的综合平台。
          </p>
          <p className="mb-6">
            我们相信，通过数字化转型，中国的农业将迎来新的发展机遇。农财通将持续创新，为广大农业从业者提供更优质、更智能的服务，共同推动农业现代化进程。
          </p>
          <div className="flex justify-center">
            <Button className="bg-white text-[#1B5E20] hover:bg-white/90">了解更多</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

