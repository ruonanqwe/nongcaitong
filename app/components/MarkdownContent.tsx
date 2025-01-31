"use client"

import type React from "react"
import ReactMarkdown from "react-markdown"

interface MarkdownContentProps {
  content: string
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MarkdownContent

