import Image from "next/image"
import Navbar from "~/components/navbar"
import Container from "~/components/container"
import BtnHome from "./btn"
const { home } = require("~/config/config.json")

export default function Page() {
  const { image_alt, image_src, text_1, text_2 } = home
  return (
    <Container
      extraClassName="min-h-screen max-h-screen"
      content={
        <div>
          <Navbar />
          <div className="pt-16 pb-5 grid lg:grid-cols-2 gap-4 items-center justify-items-center">
            <Image alt={image_alt} src={image_src} width={0} height={0} sizes="100%" className="h-[32rem] w-[34rem]" priority={true} quality={100} />
            <div>
              <p className="text-xl md:text-2xl lg:text-6xl font-bold pb-6">{text_1}</p>
              <p className="pb-6 text-sm md:text-base lg:text-base">{text_2}</p>
              <div className="flex flex-row gap-4">
                <BtnHome />
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}
