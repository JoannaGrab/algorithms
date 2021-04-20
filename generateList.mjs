export function generateList(n, ordered = false, descending = false) {
    let list = [],
    i = 0,
    min = 0,
    max = n

    while (i < n) {
        list.push(Math.floor(Math.random() * (max - min + 1) + min));
        i++;
    };

    if (ordered) {
        if (descending) {
            list.sort((a, b) => b - a)
        }
        else {
            list.sort((a, b) => a - b)
        }
    }
    return list;
}
