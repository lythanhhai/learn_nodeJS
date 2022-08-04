const errorPagination = (err, req, res, next) => {
    console.log("step")
    if(err){
        console.log(`Error: ${err.stack}`)
    }
    else {
        next(err)
    }
}

module.exports = errorPagination