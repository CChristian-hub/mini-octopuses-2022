export default function (pos = 0, action) {
    if (action.type === "increasePos") {
        return action.pos
    }
    if (action.type === "resetPos") {
        return 0
    }
    return pos
}