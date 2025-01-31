'use client'

import { motion } from "framer-motion"
import { ChevronLeft, MessageSquare, Users, Calendar, Award, BookOpen, Heart } from "lucide-react"
import Link from "next/link"

const communityFeatures = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "讨论论坛",
    description: "与其他农业从业者交流经验，分享知识"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "用户群组",
    description: "加入特定作物或地区的用户群组，获取针对性建议"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "线上活动",
    description: "参与线上培训、研讨会和经验分享会"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "优秀案例",
    description: "浏览优秀用户的使用案例和成功经验"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "知识库",
    description: "访问社区维护的农业金融知识库"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "互助平台",
    description: "在遇到困难时获取社区帮助和支持"
  }
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0C3B10]">
      {/* 导航栏 */}
      <nav className="bg-[#0C3B10]/90 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-white hover:text-green-300 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/download" className="text-white hover:text-green-300 transition-colors">下载</Link>
            <Link href="/docs" className="text-white hover:text-green-300 transition-colors">文档</Link>
            <Link href="/support" className="text-white hover:text-green-300 transition-colors">支持</Link>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="pt-16">
        {/* 顶部横幅 */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 animate-pulse"></div>
          <div className="container mx-auto px-4 py-24 relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-6 text-white">
                农财通社区
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                加入我们充满活力的社区，与其他农业从业者交流经验，共同成长
              </p>
            </motion.div>
          </div>
        </div>

        {/* 社区功能 */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[#165B1C] backdrop-blur-lg rounded-2xl p-8 border border-[#1B5E20] hover:bg-[#1C6B22] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0C3B10] text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-green-100/80">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 加入社区 */}
        <div className="container mx-auto px-4 pb-20">
          <motion.div
            className="bg-[#165B1C] rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">立即加入社区</h2>
            <p className="text-green-100/80 mb-8 max-w-2xl mx-auto">
              加入农财通社区，与数千名农业从业者一起交流经验、分享知识、解决问题
            </p>
            <motion.button
              className="px-8 py-4 bg-[#0C3B10] hover:bg-[#0A3309] rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              免费注册
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* 底部说明 */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-[#1C6B22]">
        <p className="mb-4 text-green-100/70">
          遇到问题？访问我们的{" "}
          <Link href="/docs" className="text-green-400 hover:text-green-300 transition-colors underline-offset-4 hover:underline">
            帮助文档
          </Link>
          {" "}或{" "}
          <Link href="/support" className="text-green-400 hover:text-green-300 transition-colors underline-offset-4 hover:underline">
            联系客服
          </Link>
        </p>
        <p className="text-sm text-green-100/50">
          更新日期：2025-01-31
        </p>
      </footer>
    </div>
  )
}

