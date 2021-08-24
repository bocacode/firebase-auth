export default function Home({ user }) {
  return <h1>Welcome {user ? user.email : ' Guest'}</h1>
}