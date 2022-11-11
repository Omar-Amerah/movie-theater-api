const { Router, application } = require("express")

const showRouter = Router();

const { User } = require("../models/User")
const { Show } = require("../models/Show");
const { showvalid, genrevalid, ratingvalid, idupdatesvalid } = require("../middleware/show.valid");


showRouter.get("/shows", async (req, res) => {
    const allshows = await Show.findAll()
    res.send(allshows)
})

showRouter.get("/shows/:id", showvalid, async (req, res) => {
    
    res.send(req.selectedshow)
})

showRouter.get("/show/genres/:genre", genrevalid, async (req, res) => {
    res.send(req.selectedshows)
})

showRouter.put("/shows/:id/watched/:newrating", ratingvalid, async (req, res) => {
    res.send(req.show)
})


showRouter.put("/shows/:id/updates", idupdatesvalid, async (req, res) => {
    res.send(res.selectedshow)
})

showRouter.delete("/shows/:id/delete", async (req, res) => {
    const id = req.params.id
    const show = await Show.findByPk(id)
    if(show)
    {
        await show.destroy()
        res.send("Deleted")
    }
    else
    {
        res.status(404).send("Error")
    }
})

module.exports = showRouter;