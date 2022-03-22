export default function (time = 0, action) {
    if (action.type === "setTimeZero") {
        return 0
    }
    if (action.type === "setTime") {
        return action.time
    }
    return time
}