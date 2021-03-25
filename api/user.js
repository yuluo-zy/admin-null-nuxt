import server from '~/api/server'

export const login = ({ userName, password }) => {
  const data = {
    username: userName, password: password
  }
  console.warn(data)
  return server({
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/auth/signin',
    data: data,
    method: 'post'
  })
}
