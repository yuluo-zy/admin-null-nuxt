export default ({ store, route, redirect, params, query, req, res }) => {
  if (store.state.token === null) {
    redirect('/login')
  }
}
