"use client"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "基础版",
    price: "¥99",
    features: ["基本财务管理", "收入支出追踪", "简单报表生成", "单设备使用"],
  },
  {
    name: "专业版",
    price: "¥299",
    features: ["高级财务分析", "多农场管理", "税务优化建议", "无限设备同步", "优先客户支持"],
  },
  {
    name: "企业版",
    price: "联系我们",
    features: ["定制化解决方案", "专属客户经理", "API集成", "高级数据分析", "团队协作功能"],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">选择适合您的方案</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg font-normal text-muted-foreground">/月</span>
              </div>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">选择方案</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

