const { Show } = require("../models");
const { validationResult } = require('express-validator')


async function showvalid(req, res, next)
{
    const showId = req.params.id
    req.selectedshow = await Show.findByPk(showId)
    if(req.selectedshow)
    {
        
        next();
    }
    else
    {
        res.status(404).send("Error: Show not found")
    }
}


async function genrevalid(req, res, next)
{
    const genre = req.params.genre
    req.selectedshows = await Show.findAll({where: { genre: genre}})
    if(req.selectedshows)
    {
        next();
    }
    else
    {
        res.status(404).send("Error: Genre not found")
    }
}


async function ratingvalid(req, res, next)
{
    const id = req.params.id
    const newrating = req.params.id
    req.show = await Show.findByPk(id)
    if(req.show && newrating <= 5 && newrating >=0 )
    {
        await req.show.update({rating: newrating})
        next();
    }
    else
    {
        res.status(404).send("Error: Invalid inputs")
    }
}


async function idupdatesvalid(req, res, next)
{
    const id = req.params.id
    req.selectedshow = await Show.findByPk(id)
    if(req.selectedshow)
    {
        if(req.selectedshow.status !== "on-going")
        {
            await req.selectedshow.update({status: "on-going"})
        }
        else
        {
            await req.selectedshow.update({status: "canceled"})
        }
        next();
    }
    else
    {
        res.status(404).send("Error: Show not found")
    }
}

// async function showdelete(req, res, next)
// {
//     const id = req
// }

module.exports = { showvalid, genrevalid, ratingvalid, idupdatesvalid };