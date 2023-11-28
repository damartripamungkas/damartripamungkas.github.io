import Container from "../components/container"
import Navbar from "../components/navbar"
const { skills } = require("~/config/config.json")

export default function Page() {
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
                    <th>#</th>
                    <th>Skill</th>
                    <th>Type</th>
                    <th>Understanding</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((it: any, index: number) => (
                    <tr key={index + 1} className="hover:bg-base-200">
                      <th>{index + 1}</th>
                      <td>{it.skill}</td>
                      <td>{it.type}</td>
                      <td>{it.understanding}</td>
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
