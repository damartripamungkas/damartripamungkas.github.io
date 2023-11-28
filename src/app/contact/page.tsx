import Container from "../components/container"
import Navbar from "../components/navbar"
const { contact } = require("~/config/config.json")

export default function Page() {
  return (
    <Container
      extraClassName="min-h-screen max-h-screen"
      content={
        <>
          <Navbar />
          <div className="pt-16 pb-16">
            <div className="flex flex-row gap-4 justify-center">
              {contact.map((it: any, index: number) => (
                <a key={index} href={it.url_redirect} className="btn btn-neutral">
                  {it.name}
                </a>
              ))}
            </div>
            <div className="mockup-code h-96 mt-12 gap-4">
              <pre data-prefix="$">
                <code>node generateGreetings.js</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>thank you for viewing my portfolio</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>see you again</code>
              </pre>
              <pre data-prefix=">">
                <code>Done!</code>
              </pre>
            </div>
          </div>
        </>
      }
    />
  )
}
