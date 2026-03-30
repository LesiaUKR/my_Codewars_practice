const countdown = (n) => {
    if (n===2){
        return
    }
    console.log('entering', n)
    countdown(n-2)
    console.log('returning from', n)
}

countdown(10)