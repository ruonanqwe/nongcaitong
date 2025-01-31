import fs from "fs"
import path from "path"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MarkdownContent from "../components/MarkdownContent"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">隐私政策</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">信息收集和使用</h2>
            <p className="mb-4">
              我们收集的信息用于提供和改进服务。除本隐私政策中描述的情况外，我们不会与任何人使用或共享您的信息。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">数据安全</h2>
            <p className="mb-4">
              数据安全对我们很重要，但请记住，没有任何通过互联网传输的方法或电子存储方法是100%安全的。
              虽然我们努力使用商业上可接受的方式来保护您的个人信息，但我们不能保证其绝对安全性。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">信息共享</h2>
            <p className="mb-4">
              我们不会出售、交易或出租用户的个人身份信息给他人。这不包括可能协助我们运营网站、
              开展业务或为用户提供服务的可信第三方，前提是这些方同意对这些信息保密。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookie 使用</h2>
            <p className="mb-4">
              我们使用 Cookie 来记住用户的偏好设置，以及用于其他跟踪目的。您可以选择拒绝 Cookie，
              但这可能会影响您使用我们网站某些部分的能力。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">第三方链接</h2>
            <p className="mb-4">
              我们的服务可能包含指向其他网站的链接。如果您点击第三方链接，您将被引导至该网站。
              请注意，这些外部网站不是由我们运营的。因此，我们强烈建议您查看这些网站的隐私政策。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">隐私政策的变更</h2>
            <p className="mb-4">
              我们可能会不时更新我们的隐私政策。我们建议您定期查看此页面以了解任何变更。
              这些更改在发布到此页面后立即生效。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
            <p className="mb-4">
              如果您对我们的隐私政策有任何疑问，请通过以下方式联系我们：
            </p>
            <ul className="list-disc pl-6">
              <li>电子邮件：privacy@nongcaitong.com</li>
              <li>电话：400-XXX-XXXX</li>
              <li>地址：[公司地址]</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          最后更新时间：2024年1月31日
        </div>
      </div>
    </div>
  )
}

