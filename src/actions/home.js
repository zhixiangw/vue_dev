export const GET_HOME_MSG = 'GET_HOME_MSG'
export default function getHomeMsg({ commit }) {
  console.log(1111)
  return commit(GET_HOME_MSG)
}