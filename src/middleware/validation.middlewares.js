const validate = (schema) => (req, rej, next) => {
    try{
        schema.parse(req.body);
        next();
    } catch (e) {
        resizeBy.status(400).json({error: e.errors})
    }
}

export {validate};