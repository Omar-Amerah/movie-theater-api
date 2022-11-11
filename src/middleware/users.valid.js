const { User } = require("../models");
const { Show } = require("../models");
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
async function usershowvalid(req, res, next)
{
    const userId = req.params.iduser
    const showId = req.params.idshow
    const show = await Show.findByPk(showId)
    if(show && userId)
    {
        await show.update({userId: userId})
        req.show = show
        next();
    }
    else
    {
        res.status(404).send("Error: User not found")
    }
}
module.exports = { uservalid, usershowvalid };