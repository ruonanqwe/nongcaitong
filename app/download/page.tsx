'use client'

import { motion } from "framer-motion"
import { Phone, Laptop, Cloud, Star, Shield, Zap, Download, ChevronLeft, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface Platform {
  name: string
  version: string
  size?: string
  link?: string
  status?: string
  updateDate?: string
}

interface DownloadOption {
  icon: React.ReactNode
  title: string
  description: string
  platforms: Platform[]
  webLink?: string
}

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "功能强大",
    description: "支持农业贷款、供应链金融、农产品交易等多种业务场景"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "安全可靠",
    description: "采用金融级安全防护，保障您的数据安全"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "高效便捷",
    description: "智能化流程，快速办理各类业务"
  }
]

const downloadOptions: DownloadOption[] = [
  {
    icon: <Phone className="w-12 h-12" />,
    title: "移动端 App",
    description: "随时随地管理您的农场财务，支持 iOS 和 Android 设备。",
    platforms: [
      {
        name: "iOS",
        version: "11.0+",
        size: "45.8MB",
        link: "/downloads/nongcaitong-ios.ipa",
        status: "stable",
        updateDate: "2025-01-31"
      },
      {
        name: "Android",
        version: "5.0+",
        size: "42.3MB",
        link: "/downloads/nongcaitong-android.apk",
        status: "stable",
        updateDate: "2025-01-31"
      }
    ]
  },
  {
    icon: <Laptop className="w-12 h-12" />,
    title: "桌面端软件",
    description: "更强大的数据分析和管理功能，支持 Windows 和 macOS。",
    platforms: [
      {
        name: "Windows",
        version: "10/11",
        size: "68.5MB",
        link: "/downloads/nongcaitong-win.exe"
      },
      {
        name: "macOS",
        version: "10.13+",
        size: "72.1MB",
        link: "/downloads/nongcaitong-mac.dmg"
      }
    ]
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "网页版",
    description: "无需下载，直接在浏览器中使用完整功能。",
    platforms: [
      { name: "Chrome", version: "最新版" },
      { name: "Firefox", version: "最新版" },
      { name: "Safari", version: "最新版" },
      { name: "Edge", version: "最新版" }
    ],
    webLink: "https://app.nongcaitong.com"
  }
]

export default function DownloadPage() {
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  const handleDownload = (platform: string, link: string) => {
    setDownloadStarted(platform);
    // 实际下载逻辑
    window.location.href = link;
    // 5秒后重置状态
    setTimeout(() => setDownloadStarted(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a472a] to-[#0d2c18]">
      {/* 导航栏 */}
      <nav className="bg-[#0d2c18]/80 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-white hover:text-green-300 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/docs" className="text-white hover:text-green-300 transition-colors">文档</Link>
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
              <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
                下载农财通
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                一站式农业金融服务平台，助力农业产业数字化转型
              </p>
            </motion.div>
          </div>
        </div>

        {/* 特性介绍 */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gradient-to-br from-[#1e4620] to-[#2a5c2e] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/20 mb-6 text-green-400">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-green-100/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 下载选项 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-[#1e4620]/50 backdrop-blur-lg rounded-2xl p-8 border border-green-900/50 hover:border-green-500/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6 text-green-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    {option.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{option.title}</h3>
                  <p className="text-green-100/70">{option.description}</p>
                </div>

                {option.webLink ? (
                  <motion.a
                    href={option.webLink}
                    className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center gap-2 transition-all text-white font-medium shadow-lg hover:shadow-xl mb-6"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Cloud className="w-5 h-5" />
                    立即使用网页版
                  </motion.a>
                ) : (
                  <div className="space-y-4">
                    {option.platforms.map((platform) => (
                      <motion.div
                        key={platform.name}
                        className="bg-green-900/30 rounded-xl p-4 hover:bg-green-900/40 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-white font-medium flex items-center gap-2">
                              {platform.name}
                              {platform.status === 'stable' && (
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                              )}
                            </h4>
                            <div className="flex items-center gap-3 text-sm text-green-100/70 mt-1">
                              <span>版本 {platform.version}</span>
                              {platform.size && (
                                <>
                                  <span>•</span>
                                  <span>{platform.size}</span>
                                </>
                              )}
                              {platform.updateDate && (
                                <>
                                  <span>•</span>
                                  <span>更新于 {platform.updateDate}</span>
                                </>
                              )}
                            </div>
                          </div>
                          {platform.link && (
                            <motion.button
                              onClick={() => handleDownload(platform.name, platform.link!)}
                              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-white font-medium text-sm ${downloadStarted === platform.name
                                ? 'bg-green-600 cursor-not-allowed'
                                : 'bg-green-500 hover:bg-green-600'
                                }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              disabled={downloadStarted === platform.name}
                            >
                              {downloadStarted === platform.name ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 animate-pulse" />
                                  下载中...
                                </>
                              ) : (
                                <>
                                  <Download className="w-4 h-4" />
                                  下载
                                </>
                              )}
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <p className="text-green-300 mb-3 text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    系统要求
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.platforms.map(platform => (
                      <span
                        key={platform.name}
                        className="px-3 py-1.5 bg-green-900/30 text-green-100 rounded-lg text-sm hover:bg-green-900/40 transition-colors cursor-default"
                      >
                        {platform.name} {platform.version}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* 底部说明 */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-green-900/30">
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
          版本 1.0.0 | 更新日期：2025-01-31
        </p>
      </footer>
    </div>
  )
}

