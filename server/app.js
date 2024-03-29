// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.use(express.json())

//Get all artists

app.get('/artists', (req, res) => {
  res.json(getAllArtists())
})

//Get the latest artist

app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist())
})

//Get artist by

app.get('/artists/:artistId', (req, res) => {
  res.json(getAlbumsByArtistId(artistId))
})

//Edit artist by ID

app.put('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  const editedData = req.body;
  res.json(editArtistByArtistId(artistId, editedData));
})

//Delete artist by ID

app.delete('artists/:artistId', (req, res) => {
  const artistId = req.params.artistId
  req.body = { message: "successfully deleted" }
  res.send(req.body)
  res.json(deleteArtistByArtistId(artistId))
})

//All albums of specific artist by ID

app.get('/artists/:artistId/albums', (req, res) => {
  const { artistId } = req.params
  res.json(getAlbumsByArtistId(artistId))
})



// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
