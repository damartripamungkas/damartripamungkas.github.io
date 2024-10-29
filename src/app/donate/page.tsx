import Container from "~/components/ui/container"
import Navbar from "~/components/ui/navbar"
const { donate } = require("~/config/config.json")

export default function Donate() {
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
                    <th>Platform</th>
                    <th>Dest</th>
                  </tr>
                </thead>
                <tbody>
                  {donate.map(({ platform, dest }: any, index: number) => (
                    <tr key={index + 1} className="hover:bg-base-200">
                      <td>{platform}</td>
                      <td>{dest.startsWith("http") ? <a href={dest}>{dest}</a> : dest}</td>
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
