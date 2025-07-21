import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/patients',
    permanent: false,
  },
})

export default function Home() {
  return null
}
