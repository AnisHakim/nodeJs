var x= process.argv.reduce((acc, el) =>
    Number.isInteger(parseInt(el)) ? acc + parseInt(el) : acc, 0)
    console.log(x)