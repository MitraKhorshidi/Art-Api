import Link from "next/link"
import { Detail } from "./Detail"

const Single = () => {
  return (
    <div>
      <Link href='/'>Back to the List</Link>
      <Detail/>
    </div>
  )
}

export default Single