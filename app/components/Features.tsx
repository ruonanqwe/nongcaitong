import { BarChart2, Cloud, DollarSign, Calendar, Users, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <BarChart2 className="h-8 w-8 text-white" />,
      title: "智能分析",
      description: "利用AI技术分析农场数据，提供精准的经营建议",
    },
    {
      icon: <Cloud className="h-8 w-8 text-white" />,
      title: "云端存储",
      description: "数据安全存储在云端，随时随地访问",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "财务管理",
      description: "全面的财务管理工具，包括收支记录、预算规划",
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "种植计划",
      description: "智能排期系统，优化种植计划和资源分配",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "团队协作",
      description: "支持多人协作，提高团队工作效率",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "数据安全",
      description: "企业级安全保障，保护您的数据安全",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">为什么选择农财通</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

