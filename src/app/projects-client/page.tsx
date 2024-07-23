import Navbar from "../../components/navbar"
import Container from "../../components/container"
import Card from "./card"
const { projects_client } = require("~/config/config.json")

export default function Page() {
  return (
    <Container
      extraClassName="min-h-screen max-h-screen"
      content={
        <>
          <Navbar />
          <div className="pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects_client.map((it: any, index: number) => {
              const { name, description, url_source, url_visit, image_src, image_alt, tech_stack } = it
              return (
                <Card
                  key={index}
                  urlSource={url_source}
                  urlVisit={url_visit}
                  extraClassName={`card-compact hover:bg-base-200 transition`}
                  imageSrc={image_src}
                  imageAlt={image_alt}
                  techStack={tech_stack}
                  content={{ title: name, description }}
                />
              )
            })}
          </div>
        </>
      }
    />
  )
}
