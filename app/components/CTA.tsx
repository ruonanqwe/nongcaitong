"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">准备好提升您的农场管理了吗？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            加入成千上万的农场主，使用农财通优化您的农业经营。现在开始14天免费试用，无需信用卡。
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full">
            立即开始免费试用
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

