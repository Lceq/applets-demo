const {request} = require('../utils/bsurl.js');
module.exports ={
  artistMv : (data) => { return request('artist/mv',data) },// 
  artistDesc : (data) => { return request('artist/desc',data) },// 
  simiArtist : (data) => { return request('simi/artist',data) },// 
  artistAlbum : (data) => { return request('artist/album',data) },// 
  artistDetail : (data) => { return request('artist/detail',data) },// 
  artistTopSong : (data) => { return request('artist/top/song',data) },// 

}