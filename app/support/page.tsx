'use client'

import { motion } from "framer-motion"
import { ChevronLeft, MessageCircle, Phone, Mail, Clock, FileQuestion, ChevronDown, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface FAQ {
    category: string;
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        category: '账户问题',
        question: '如何注册农财通账户？',
        answer: '您可以通过手机号码或邮箱注册农财通账户。注册时需要提供基本信息，包括姓名、联系方式等。注册完成后，您需要进行实名认证才能使用完整功能。'
    },
    {
        category: '账户问题',
        question: '忘记密码怎么办？',
        answer: '您可以通过绑定的手机号码或邮箱进行密码重置。点击登录页面的"忘记密码"，按照提示步骤操作即可。'
    },
    {
        category: '功能使用',
        question: '如何申请农业贷款？',
        answer: '登录账户后，进入"贷款服务"模块，选择适合的贷款产品，填写申请信息并上传所需材料。我们的工作人员会在1-3个工作日内进行审核。'
    },
    {
        category: '功能使用',
        question: '如何查看交易记录？',
        answer: '在个人中心的"交易记录"页面，您可以查看所有的交易明细。支持按时间、类型等条件筛选，也可以导出交易记录。'
    },
    {
        category: '技术问题',
        question: 'APP 无法登录怎么办？',
        answer: '请先检查网络连接是否正常，然后确认账号密码是否正确。如果问题仍然存在，可以尝试清除应用数据后重新登录，或联系客服处理。'
    },
    {
        category: '技术问题',
        question: '系统支持哪些设备？',
        answer: '我们的系统支持 iOS 11.0 以上和 Android 5.0 以上的移动设备，以及主流的现代浏览器（Chrome、Firefox、Safari、Edge 等）。'
    }
];

const supportChannels = [
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "在线客服",
        description: "工作日 9:00-18:00",
        action: "立即咨询",
        link: "#"
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: "电话支持",
        description: "17318132503",
        action: "拨打电话",
        link: "tel:17318132503"
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "邮件支持",
        description: "1963876196@qq.com",
        action: "发送邮件",
        link: "mailto:1963876196@qq.com"
    }
]

export default function SupportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
        if (!acc[faq.category]) {
            acc[faq.category] = [];
        }
        acc[faq.category].push(faq);
        return acc;
    }, {} as Record<string, FAQ[]>);

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
                        <Link href="/community" className="text-white hover:text-green-300 transition-colors">社区</Link>
                    </div>
                </div>
            </nav>

            {/* 主要内容 */}
            <main className="pt-16">
                {/* 顶部横幅 */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 animate-pulse"></div>
                    <div className="container mx-auto px-4 py-12 relative">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-bold mb-4 text-white">
                                帮助与支持
                            </h1>
                            <p className="text-lg text-green-100 max-w-2xl mx-auto">
                                我们随时为您提供帮助，解答您的问题
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* 主要内容区域 - 左右布局 */}
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* 左侧 - 联系方式 */}
                        <div className="lg:w-1/3 space-y-4">
                            {supportChannels.map((channel, index) => (
                                <motion.a
                                    key={channel.title}
                                    href={channel.link}
                                    className="block bg-[#165B1C] backdrop-blur-lg rounded-xl p-6 border border-[#1B5E20] hover:bg-[#1C6B22] transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0C3B10] text-white">
                                            {channel.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-1">{channel.title}</h3>
                                            <p className="text-green-100/80 mb-2 text-sm">{channel.description}</p>
                                            <span className="text-white font-medium hover:text-green-300 transition-colors text-sm">
                                                {channel.action} →
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}

                            {/* 工作时间状态 */}
                            <div className="bg-[#165B1C] rounded-xl p-4 border border-[#1B5E20]">
                                <p className="text-green-100/70 mb-2 text-sm">
                                    工作时间：周一至周五 9:00-18:00
                                </p>
                                <div className="flex items-center gap-2 text-green-100/50">
                                    <Clock className="w-4 h-4" />
                                    <p className="text-sm">
                                        当前状态：{new Date().getHours() >= 9 && new Date().getHours() < 18 ? "在线服务中" : "非工作时间"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 右侧 - 常见问题 */}
                        <div className="lg:w-2/3">
                            {/* 搜索框 */}
                            <div className="mb-8">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                                    <input
                                        type="text"
                                        placeholder="搜索常见问题..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-[#165B1C] border border-[#1B5E20] rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-green-100/50 focus:outline-none focus:border-[#1C6B22] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* FAQ 列表 */}
                            <div className="space-y-6">
                                {Object.entries(groupedFaqs).map(([category, questions], categoryIndex) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                    >
                                        <h2 className="text-xl font-semibold text-white mb-3">{category}</h2>
                                        <div className="space-y-3">
                                            {questions.map((faq, index) => (
                                                <motion.div
                                                    key={faq.question}
                                                    className="bg-[#165B1C] rounded-xl overflow-hidden"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                                >
                                                    <button
                                                        onClick={() => setExpandedQuestion(expandedQuestion === faq.question ? null : faq.question)}
                                                        className="w-full px-5 py-3 flex items-center justify-between text-left"
                                                    >
                                                        <span className="text-white font-medium text-sm">{faq.question}</span>
                                                        <ChevronDown
                                                            className={`w-4 h-4 text-white transition-transform ${expandedQuestion === faq.question ? "rotate-180" : ""}`}
                                                        />
                                                    </button>
                                                    {expandedQuestion === faq.question && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="px-5 pb-3"
                                                        >
                                                            <p className="text-green-100/80 text-sm">{faq.answer}</p>
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
} 