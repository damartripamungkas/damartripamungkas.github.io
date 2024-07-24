import PageProjects from "~/components/projects/page"
const { projects_client } = require("~/config/config.json")

export default function Page() {
  return <PageProjects data={projects_client} />
}
