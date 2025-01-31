import { Button } from "@/components/ui/button"
import { Calculator, FileText, BadgeCheck, Clock } from "lucide-react"

export default function FinancialServices() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">金融服务</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* 贷款服务 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">农业贷款</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Calculator className="h-6 w-6 text-white shrink-0" />
              <div>
                <div className="font-semibold text-white">灵活的贷款方案</div>
                <div className="text-white/80">根据农场规模和经营情况，提供个性化贷款方案</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-white shrink-0" />
              <div>
                <div className="font-semibold text-white">快速审批</div>
                <div className="text-white/80">在线申请，最快24小时完成审批</div>
              </div>
            </div>
            <Button className="w-full bg-white text-[#1B5E20] hover:bg-white/90">申请贷款</Button>
          </div>
        </div>

        {/* 补贴申请 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">补贴申请</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FileText className="h-6 w-6 text-white shrink-0" />
              <div>
                <div className="font-semibold text-white">一站式申请</div>
                <div className="text-white/80">集成各类农业补贴政策，简化申请流程</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BadgeCheck className="h-6 w-6 text-white shrink-0" />
              <div>
                <div className="font-semibold text-white">政策咨询</div>
                <div className="text-white/80">专业团队提供政策解读和申请指导</div>
              </div>
            </div>
            <Button className="w-full bg-white text-[#1B5E20] hover:bg-white/90">查看补贴政策</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

