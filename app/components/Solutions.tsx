import { Button } from "@/components/ui/button"

export default function Solutions() {
  const solutions = [
    {
      title: "小型农场",
      description: "适合个体农户和小型农场的基础财务管理解决方案",
      features: ["基础财务记录", "简单报表生成", "种植计划管理", "天气预报集成"],
      price: "¥99/月",
    },
    {
      title: "中型农场",
      description: "适合中型农场的专业财务管理解决方案",
      features: ["高级财务分析", "多人协作功能", "智能预测系统", "农产品溯源"],
      price: "¥299/月",
      highlighted: true,
    },
    {
      title: "农业企业",
      description: "适合大型农业企业的企业级解决方案",
      features: ["企业财务管理", "供应链管理", "数据分析平台", "定制化服务"],
      price: "联系我们",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">选择适合您的方案</h2>
      <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
        我们提供多种解决方案，满足不同规模农场的需求。选择最适合您的方案，开始智能化管理您的农场。
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`
              p-6 rounded-lg 
              ${solution.highlighted ? "bg-white text-[#1B5E20]" : "bg-white/10 backdrop-blur-sm text-white"}
            `}
          >
            <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
            <p className={`mb-6 ${solution.highlighted ? "text-[#1B5E20]/80" : "text-white/80"}`}>
              {solution.description}
            </p>
            <ul className="space-y-2 mb-6">
              {solution.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">•</span>
                  <span className={solution.highlighted ? "text-[#1B5E20]/80" : "text-white/80"}>{feature}</span>
                </li>
              ))}
            </ul>
            <div className={`text-2xl font-bold mb-6 ${solution.highlighted ? "text-[#1B5E20]" : "text-white"}`}>
              {solution.price}
            </div>
            <Button
              className={`w-full ${
                solution.highlighted
                  ? "bg-[#1B5E20] text-white hover:bg-[#1B5E20]/90"
                  : "bg-white text-[#1B5E20] hover:bg-white/90"
              }`}
            >
              立即开始
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

