"use client"
import Image from "next/image"
import { useState } from "react"

interface IfaceRenderModal {
  isOpen: boolean
  callbackClose: any
  contentTitle: string
  contentImageSrc: string
  contentImageAlt: string
  contentVisitHref: string
}

interface IfaceCard {
  content: {
    title: string
    description: string
  }
  extraClassName?: string
  imageSrc?: any
  imageAlt?: any
  href: string
}

const RenderModal = ({ isOpen, callbackClose, contentTitle, contentImageSrc, contentImageAlt, contentVisitHref }: IfaceRenderModal) => {
  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box w-full sm:max-w-full md:max-w-6xl lg:max-w-5xl">
        <h3 className="font-bold text-lg">{contentTitle}</h3>
        <Image
          src={contentImageSrc}
          className="pt-6 h-full w-full"
          alt={contentImageAlt}
          width={0}
          height={0}
          priority={true}
          sizes="100%"
          quality={100}
        />
        <div className="modal-action">
          <a
            href={contentVisitHref}
            className="btn btn-md btn-neutral mx-2 px-8"
            onClick={() => {
              callbackClose(false)
            }}
          >
            Visit
          </a>

          <button
            className="btn btn-md btn-neutral"
            onClick={() => {
              callbackClose(false)
            }}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default function Card({ content, extraClassName, imageSrc, imageAlt, href }: IfaceCard) {
  const [statusModal, setStatusModal] = useState(false)
  return (
    <>
      <RenderModal
        isOpen={statusModal}
        callbackClose={setStatusModal}
        contentTitle={content.title}
        contentImageSrc={imageSrc}
        contentImageAlt={imageAlt}
        contentVisitHref={href}
      />
      <div
        className={`card outline rounded-none ${extraClassName}`}
        onClick={() => {
          setStatusModal(true)
        }}
      >
        {imageSrc && imageAlt && (
          <Image alt={imageAlt} src={imageSrc} width={0} height={0} sizes="100%" className="w-full max-h-48" priority={true} quality={100} />
        )}
        <div className="card-body">
          <div className="text-center">
            <p className="sm:text-md md:text-md lg:text-lg font-bold">{content.title}</p>
            <p className="pt-2">{content.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
