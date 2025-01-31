import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#133915] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">农财通</h3>
            <p className="text-white/80 mb-4">智能农业财务管理系统，助力农业数字化转型</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>17318132503</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>1963876196@qq.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>四川省成都市成华区西林一街</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white">
                  产品服务
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/80 hover:text-white">
                  新闻资讯
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-white/80 hover:text-white">
                  帮助中心
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 服务支持 */}
          <div>
            <h3 className="text-xl font-bold mb-4">服务支持</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/loan" className="text-white/80 hover:text-white">
                  贷款服务
                </Link>
              </li>
              <li>
                <Link href="/subsidy" className="text-white/80 hover:text-white">
                  补贴申请
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-white/80 hover:text-white">
                  培训课程
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-white/80 hover:text-white">
                  开发文档
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-white/80 hover:text-white">
                  API接口
                </Link>
              </li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-2">
                  <img src="/placeholder.svg?height=100&width=100" alt="微信二维码" className="w-full" />
                </div>
                <span className="text-sm">微信公众号</span>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-2">
                  <img src="/placeholder.svg?height=100&width=100" alt="小程序二维码" className="w-full" />
                </div>
                <span className="text-sm">小程序</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-white/60 text-sm">© 2025 农财通 版权所有 </div>
            <div className="flex space-x-4 md:justify-end text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white">
                隐私政策
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white">
                服务条款
              </Link>
              <Link href="/sitemap" className="text-white/60 hover:text-white">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

