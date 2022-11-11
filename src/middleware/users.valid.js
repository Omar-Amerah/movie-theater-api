const { User } = require("../models");

async function uservalid(req, res, next)
{
    const userId = req.params.id
    req.selecteduser = await User.findByPk(userId)
    if(req.selecteduser)
    {
        next();
    }
    else
    {
        res.status(404).send("Error: User not found")
    }
}
module.exports = { uservalid };