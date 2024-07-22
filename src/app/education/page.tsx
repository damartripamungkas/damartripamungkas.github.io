import Container from "~/components/container"
import Navbar from "~/components/navbar"
const { education } = require("~/config/config.json")

export default function Education() {
  return (
    <Container
      extraClassName="min-h-screen max-h-screen"
      content={
        <>
          <Navbar />
          <div className="pt-16 pb-16">
            <div className="overflow-auto">
              <table className="table table-xs lg:table-sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {education.map((it: any, index: number) => (
                    <tr key={index + 1} className="hover:bg-base-200">
                      <td>{it.name}</td>
                      <td>{it.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      }
    />
  )
}
