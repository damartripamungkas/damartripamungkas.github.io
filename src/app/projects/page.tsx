import Image from "next/image"
import Navbar from "../components/navbar"
import Container from "../components/container"
const { projects } = require("~/config/config.json")

interface IfaceCard {
  content: any
  extraClassName?: string
  imageSrc?: any
  imageAlt?: any
  href: string
}

const Card = ({ content, extraClassName, imageSrc, imageAlt, href }: IfaceCard) => {
  return (
    <a href={href} className={`card outline rounded-none ${extraClassName}`}>
      {imageSrc && imageAlt && (
        <Image
          alt={imageAlt}
          src={imageSrc}
          width={0}
          height={0}
          sizes="100%"
          className="h-64 w-full"
          priority={true}
          quality={100}
        />
      )}
      <div className="card-body">{content}</div>
    </a>
  )
}

export default function Page() {
  return (
    <Container
      extraClassName="min-h-screen max-h-screen"
      content={
        <>
          <Navbar />
          <div className="pt-16 pb-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((it: any, index: number) => {
              return (
                <Card
                  key={index}
                  href={it.url_repository}
                  extraClassName={`card-compact hover:bg-neutral-content transition`}
                  imageSrc={it.image_src}
                  imageAlt={it.image_alt}
                  content={
                    <div className="text-center">
                      <p className="sm:text-md md:text-md lg:text-lg font-bold">{it.name}</p>
                      <p className="pt-2">{it.description}</p>
                    </div>
                  }
                />
              )
            })}
          </div>
        </>
      }
    />
  )
}
