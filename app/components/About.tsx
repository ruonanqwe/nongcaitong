"use client"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20" ref={ref}>
      <div
        className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">关于农财通</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-green-700 mb-6">
              农财通是一款革命性的农业财务管理服务，旨在帮助农民和农业企业更好地管理他们的财务。我们的产品提供直观的界面、强大的分析工具和实时报告，让您轻松掌控农场的财务状况。
            </p>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">主要特点：</h3>
              <ul className="list-disc list-inside text-green-700 space-y-2">
                <li>农业专用会计工具</li>
                <li>作物和牲畜库存管理</li>
                <li>农场补贴和税收计算器</li>
                <li>天气集成的收益预测</li>
                <li>多设备同步和云存储</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <img src="/placeholder.svg?height=400&width=600" alt="农财通功能展示" className="rounded-lg shadow-xl" />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">提升30%</p>
              <p>农场利润率</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

