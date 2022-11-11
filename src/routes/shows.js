const { Router, application } = require("express")

const showRouter = Router();

const { User } = require("../models/User")
const { Show } = require("../models/Show");
const { showvalid, genrevalid, ratingvalid, idupdatesvalid, showdelete } = require("../middleware/show.valid");


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
    res.send(req.selectedshow)
})

showRouter.delete("/shows/:id/delete",showdelete, async (req, res) => {
    res.send("Deleted")
})

module.exports = showRouter;