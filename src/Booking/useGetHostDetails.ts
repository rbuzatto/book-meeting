import { useQuery } from '@tanstack/react-query'

const mockedHostDetails = {
  name: 'Arvind Menon',
  img: 'https://media.licdn.com/dms/image/v2/C4E03AQHC-vltZb0iGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516298336264?e=1741219200&v=beta&t=uP74qpo0OZJ-tZNcyXTg40trArm8fb6dCG6uEBTzcC4',
  logo: 'https://www.offeringtree.com/wp-content/uploads/2024/03/cropped-TreeColorMed.png.webp',
  title: '30 minute Interview',
  duration: 30,
}

type HostDetails = typeof mockedHostDetails

export const useGetHostDetails = () => {
  return useQuery<HostDetails>({
    queryKey: ['host-details'],
    queryFn: async () => {
      return new Promise(resolve => {
        setTimeout(() => resolve(mockedHostDetails), 350)
      })
    },
  })
}
