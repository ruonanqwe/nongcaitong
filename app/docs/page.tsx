'use client'

import { motion } from "framer-motion"
import { ChevronLeft, Book, Code, Terminal, Puzzle, FileCode2, GitBranch } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface DocSection {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  articles: {
    id: string
    title: string
    description: string
  }[]
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: '快速开始',
    icon: <Book className="w-6 h-6" />,
    description: '了解如何快速开始使用农财通开发者工具',
    articles: [
      {
        id: 'introduction',
        title: '介绍',
        description: '农财通开发平台概述'
      },
      {
        id: 'quickstart',
        title: '快速入门',
        description: '5分钟快速搭建开发环境'
      },
      {
        id: 'architecture',
        title: '系统架构',
        description: '了解系统整体架构设计'
      }
    ]
  },
  {
    id: 'api-reference',
    title: 'API 文档',
    icon: <Code className="w-6 h-6" />,
    description: '详细的 API 接口文档和使用说明',
    articles: [
      {
        id: 'authentication',
        title: '认证授权',
        description: 'API 认证和授权机制说明'
      },
      {
        id: 'endpoints',
        title: '接口列表',
        description: '所有可用的 API 接口'
      },
      {
        id: 'error-codes',
        title: '错误代码',
        description: 'API 错误码说明'
      }
    ]
  },
  {
    id: 'sdk',
    title: 'SDK 使用',
    icon: <Terminal className="w-6 h-6" />,
    description: '各语言 SDK 的使用指南',
    articles: [
      {
        id: 'nodejs-sdk',
        title: 'Node.js SDK',
        description: 'Node.js SDK 使用文档'
      },
      {
        id: 'python-sdk',
        title: 'Python SDK',
        description: 'Python SDK 使用文档'
      },
      {
        id: 'java-sdk',
        title: 'Java SDK',
        description: 'Java SDK 使用文档'
      }
    ]
  },
  {
    id: 'plugins',
    title: '插件开发',
    icon: <Puzzle className="w-6 h-6" />,
    description: '学习如何开发自定义插件',
    articles: [
      {
        id: 'plugin-guide',
        title: '插件开发指南',
        description: '插件开发基础教程'
      },
      {
        id: 'plugin-api',
        title: '插件 API',
        description: '插件开发 API 文档'
      },
      {
        id: 'plugin-examples',
        title: '示例插件',
        description: '插件开发示例代码'
      }
    ]
  },
  {
    id: 'examples',
    title: '示例代码',
    icon: <FileCode2 className="w-6 h-6" />,
    description: '丰富的示例代码和最佳实践',
    articles: [
      {
        id: 'basic-examples',
        title: '基础示例',
        description: '基础功能示例代码'
      },
      {
        id: 'advanced-examples',
        title: '进阶示例',
        description: '高级功能示例代码'
      },
      {
        id: 'best-practices',
        title: '最佳实践',
        description: '开发最佳实践指南'
      }
    ]
  },
  {
    id: 'contribute',
    title: '参与贡献',
    icon: <GitBranch className="w-6 h-6" />,
    description: '了解如何参与项目开发',
    articles: [
      {
        id: 'contributing-guide',
        title: '贡献指南',
        description: '如何参与项目贡献'
      },
      {
        id: 'code-style',
        title: '代码规范',
        description: '项目代码规范说明'
      },
      {
        id: 'roadmap',
        title: '开发路线',
        description: '项目开发计划和路线图'
      }
    ]
  }
]

export default function DocsPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

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
            <Link href="/community" className="text-white hover:text-green-300 transition-colors">社区</Link>
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
                开发者文档
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                全面的开发文档，助您快速接入农财通开放平台
              </p>
            </motion.div>
          </div>
        </div>

        {/* 文档内容 */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-[#165B1C] backdrop-blur-lg rounded-2xl p-8 border border-[#1B5E20] hover:bg-[#1C6B22] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0C3B10] text-white">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                    <p className="text-green-100/80 text-sm">{section.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {section.articles.map(article => (
                    <motion.a
                      key={article.id}
                      href={`/docs/${section.id}/${article.id}`}
                      className="block p-4 rounded-xl bg-[#0C3B10] hover:bg-[#0A3309] transition-colors"
                      whileHover={{ x: 8 }}
                    >
                      <h4 className="text-white font-medium mb-1">{article.title}</h4>
                      <p className="text-green-100/80 text-sm">{article.description}</p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* 底部说明 */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-[#1C6B22]">
        <p className="mb-4 text-green-100/70">
          需要帮助？加入我们的{" "}
          <Link href="/community" className="text-white hover:text-green-300 transition-colors underline-offset-4 hover:underline">
            开发者社区
          </Link>
          {" "}或{" "}
          <Link href="/support" className="text-white hover:text-green-300 transition-colors underline-offset-4 hover:underline">
            联系技术支持
          </Link>
        </p>
        <p className="text-sm text-green-100/50">
          文档最后更新：2025-01-31
        </p>
      </footer>
    </div>
  )
}

