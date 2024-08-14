import Image from "next/image"
import { FiGithub, FiGlobe } from "react-icons/fi"

interface IfaceCard {
  content: {
    title: string
    description: string
  }
  extraClassName?: string
  imageSrc?: any
  imageAlt?: any
  urlSource: string
  urlVisit: string
  techStack: string
}

export default function Card({ content, extraClassName, imageSrc, imageAlt, urlSource, urlVisit, techStack }: IfaceCard) {
  const haveUrlSource = urlSource.length >= 1
  const haveUrlVisit = urlVisit.length >= 1
  return (
    <div className={`card outline rounded-none ${extraClassName}`}>
      {imageSrc && imageAlt && (
        <a href={imageSrc}>
          <Image alt={imageAlt} src={imageSrc} width={0} height={0} sizes="100%" className="h-52 w-full" priority={true} quality={100} />
        </a>
      )}
      <div className="card-body flex">
        <p className="sm:text-md md:text-md lg:text-lg font-bold">{content.title}</p>
        <p>{content.description}</p>
      </div>
      <div className="card-footer px-3 pb-3">
        <div className={`flex flex-wrap gap-1 ${(haveUrlSource || haveUrlVisit) && `pb-3`}`}>
          {techStack.split(`, `).map((it, index) => {
            return (
              <button key={index} className="btn btn-xs text-xs rounded">
                {it}
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          {haveUrlSource && (
            <a href={urlSource} className="btn btn-sm btn-outline text-xs rounded">
              <FiGithub className="h-4 w-4" />
              Source
            </a>
          )}

          {haveUrlVisit && (
            <a href={urlVisit} className="btn btn-sm btn-outline text-xs rounded">
              <FiGlobe className="h-4 w-4" />
              Visit
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
