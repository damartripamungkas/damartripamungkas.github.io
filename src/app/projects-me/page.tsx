import PageProjects from "~/components/projects/page"
const { projects_me } = require("~/config/config.json")

export default function Page() {
  return <PageProjects data={projects_me} />
}
