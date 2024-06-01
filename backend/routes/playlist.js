const express = require("express");
const router = express.Router();
const Playlist = require("../models/Playlist.model");

router.get("/api/playlist", (req, res) => {
  Playlist.find()
    .then(playlists => res.json(playlists))
    .catch(err => res.status(400).json({ error: 'Error fetching playlists', details: err }));
});

router.post("/api/addPlaylist", (req, res) => {
  const newPlaylist = new Playlist(req.body);
  newPlaylist.save()
    .then((playlist) => {
      console.log("Playlist data saved");
      res.status(201).json(playlist);
    })
    .catch((err) => {
      res.status(400).json({ error: 'Error adding playlist', details: err });
    });
});

router.delete("/api/deletePlaylist/:id", (req, res) => {
  Playlist.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("Playlist deleted");
      res.json({ message: "Playlist deleted" });
    })
    .catch(err => res.status(400).json({ error: 'Error deleting playlist', details: err }));
});

module.exports = router;
