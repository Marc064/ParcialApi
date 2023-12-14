function loadData() {
    return new Promise((res, rej) => {
        fetch("")
            .then(result => result.json())
            .then(result => res(result))
            .catch(err => rej(err))
    })
}