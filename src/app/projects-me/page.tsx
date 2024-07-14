import Navbar from "../components/navbar"
import Container from "../components/container"
import Card from "./card"
const { projects_me } = require("~/config/config.json")

export default function Page() {
  return (
    <Container
      extraClassName="min-h-screen max-h-screen"
      content={
        <>
          <Navbar />
          <div className="pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects_me.map((it: any, index: number) => {
              return (
                <Card
                  key={index}
                  href={it.url_repository}
                  extraClassName={`card-compact hover:bg-base-200 transition`}
                  imageSrc={it.image_src}
                  imageAlt={it.image_alt}
                  content={{ title: it.name, description: it.description }}
                />
              )
            })}
          </div>
        </>
      }
    />
  )
}
