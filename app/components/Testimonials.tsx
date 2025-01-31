"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "张明",
    role: "果园主",
    content: "农财通彻底改变了我管理果园的方式。财务分析功能帮我找到了很多节省成本的机会。",
    rating: 5,
  },
  {
    name: "李华",
    role: "大型农场经理",
    content: "作为一个管理大型农场的经理，我需要实时了解各个环节的情况。农财通让这一切变得如此简单。",
    rating: 5,
  },
  {
    name: "王芳",
    role: "有机蔬菜种植者",
    content: "农财通的作物管理功能太棒了！它帮助我更好地规划种植周期，提高了产量。",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">用户心声</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

