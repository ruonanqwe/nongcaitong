import fs from "fs"
import path from "path"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MarkdownContent from "../components/MarkdownContent"

export default function TermsPage() {
  const mdContent = fs.readFileSync(path.join(process.cwd(), "app/terms/page.md"), "utf-8")

  return (
    <div className="min-h-screen bg-[#1B5E20]">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <MarkdownContent content={mdContent} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

