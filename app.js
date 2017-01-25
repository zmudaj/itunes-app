function ItunesController(){
  var itunesService = new ItunesService()  
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }
  
  itunesService.getMusicByArtist('nirvana').then(drawSongs);
  
  function drawSongs(songList){
    //console.log(songList);
    // This is where you task begins
    document.getElementById("song-list").innerHTML = '';
    for(var i = 0; i < 51; i++){
      var song = songList[i];
      document.getElementById("song-list").innerHTML += `
        <div class="outer-shell">
          <div class="container">
            <div class="row row-background">
              <div class="col-xs-12 col-md-3">
                <div class="card"> 
                  <img src='${song.albumArt}'>
                </div>
              </div>
              <div class="col-xs-12 col-md-5">
                <div class="card">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      ${song.title}
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li>Title: ${song.title}</li>
                      <li>Artist: ${song.artist}</li>
                      <li>Album: ${song.collection}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="card">
                  Price: ${song.price} <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><br>
                  Preview: <a href='${song.preview}'>Listen now</a><br>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;  
    }
    //close the tag on the conatainer div
    document.getElementById("song-list").innerHTML += '</div>';
  }
  
}



var itunesCtrl = new ItunesController()