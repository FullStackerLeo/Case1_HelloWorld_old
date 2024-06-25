import { QueryClientProvider , QueryClient} from "react-query"
import TSQ from "./tanstackquery_"

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <TSQ />
    </QueryClientProvider>
  )
}