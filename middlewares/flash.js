module.exports = (req, res, next) => {
    req.flash = (type, content) => {
        if (!req.session.flash) req.session.flash = {} 

    }

    next()
}
