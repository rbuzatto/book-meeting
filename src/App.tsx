import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Booking } from './Booking'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Booking />
    </QueryClientProvider>
  )
}

export default App
