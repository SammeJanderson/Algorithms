//var declarations push the var to a global scope,  avoid it whenever possible
for (var i = 0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }

    setTimeout(log, 100)
}

//use let instead
for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }

    setTimeout(log, 100)
}
