const { Router } = require("express")

const userRouter = Router();

const { User } = require("../models/User")
const { Show } = require("../models/Show")

const { uservalid, usershowvalid} = require("../middleware/users.valid")

userRouter.get("/user", async  (req, res) => {
    const allusers = await User.findAll()
    res.send(allusers)
})

userRouter.get("/user/:id", uservalid, async (req, res) => {
    //const oneusers = await User.findByPk(req.params.num)
    res.send(req.selecteduser)
})

userRouter.get("/user/:id/shows", uservalid, async (req, res) => {
    const shows = await Show.findAll({where: { userId: req.selecteduser }})
    res.send(shows)
})

userRouter.put("/users/:iduser/shows/:idshow",usershowvalid, async(req, res) => {
    res.send(req.show)
})
 

module.exports = userRouter;