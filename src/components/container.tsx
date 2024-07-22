import React from "react"

interface IfaceParams {
  content: React.ReactNode
  extraClassName?: string
}

export default function Container({ content, extraClassName }: IfaceParams) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${extraClassName}`}>{content}</div>
}
