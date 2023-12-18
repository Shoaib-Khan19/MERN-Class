   // tryCatchWrapper Body
   function tryCatchWrapper(callback) {
    try {
        return callback();
    } catch (error) {
        res.status(500).json(err.message)
    }
}

module.exports = {tryCatchWrapper};