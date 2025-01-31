"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Hero() {
  const slides = [
    {
      title: "智能农业财务管理",
      description: "全方位的财务解决方案，助力农业数字化转型",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "农业贷款服务",
      description: "快速便捷的贷款申请，支持农业发展",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "补贴申请平台",
      description: "一站式农业补贴申请，政策信息实时更新",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid md:grid-cols-2 gap-8 items-center p-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{slide.title}</h1>
                  <p className="text-lg text-white/80 mb-8">{slide.description}</p>
                  <Button className="bg-white text-[#1B5E20] hover:bg-white/90">
                    立即体验 <ArrowRight className="ml-2" />
                  </Button>
                </div>
                <div className="relative">
                  <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="rounded-lg shadow-2xl" />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-[#1B5E20] font-bold">实时数据分析</div>
                    <div className="text-[#1B5E20]/80 text-sm">智能预测与决策支持</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white border-white" />
        <CarouselNext className="text-white border-white" />
      </Carousel>
    </div>
  )
}

