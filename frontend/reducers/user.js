export default function (user = {}, action) {
  if (action.type === "saveUser") {
    return action.gameUser;
  }
  if (action.type === "saveTopics") {
    user.topics = [...action.topics]
  }
  return user;
}
