let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  printAllSongNames: function() {
    // print the names of all the songs to the console
    //songsName = Object.keys(library.songs["s01","s02","s03"]); 
    //return Object.keys(library.songs["s01"]);
    Object.keys(library.songs).forEach(function(elm){
      console.log(library.songs[elm].name);
    });
  },

  printSongName: function(songID) {
    // print the name of a song when given its ID
    Object.keys(library.songs).forEach(function(elm){
      if(songID === library.songs[elm].id)
      console.log(library.songs[elm].name);
    });
  },

  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID
    for(let i = 1; i <= playlistID.length; i++){
      console.log(library.playlists[playlistID].name);
      break;
    }; 
  },

  printAllPlaylistNames: function() {
    // Print the nmaes of all the playlists
    Object.keys(library.playlists).forEach(function(elm){
      console.log(library.playlists[elm].name);
    });  
  },


  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given 
    
    // Object.keys(library.playlists).forEach(function(playlistID){
    //   console.log(library.playlists[playlistID].tracks);
    // });   
    
    Object.keys(library.playlists).forEach(function(elem){  
      if(playlistID === library.playlists[elem].id){
        // console.log(library.playlists[elem].tracks);
        const songList = library.playlists[elem].tracks;
        songList.forEach(function(elem2){
          Object.keys(library.songs).forEach(function(elem){
            if(elem2 === library.songs[elem].id){
              console.log(library.songs[elem].name);
            }
          });
        });
      }    
    });   
    
  },
  

  addSong: function(name, artist, album) {
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.

    library.songs.s04 = {
      id: library.generateUid(),
      name: "AH",
      artist: "Oh",
      album:"haha"
    };
  },

//   library.songs.s04 = {
//     id: library.generateUid(),
//     name: "AH",
//     artist: "Oh",
//     album:"haha"
//   };
// },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.
    
    // songID = Object.keys(library.songs);
    // playlistID = Object.keys(library.playlists);

    //  if(playlistID === library.playlists[playlistID] && songID === library.songs[songID]){
    //   library.playlists.forEach((a)=>{a.tracks+=songID})
    // };

    // library.playlists[playlistID] = {
    //   tracks: songID 
    // };

    // Object.keys(library.playlists).forEach(function(elm, elm2){
    //   console.log(library.playlists[playlistID].tracks + songID);
    // }); 

    library.playlists[playlistID].tracks.push(songID);

  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.

    library.playlists.p03 = {
      id: library.generateUid(),
      name: name,
      tracks: arrOfSongs
    };
  },





}



// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);


//library.printAllSongNames();
//library.printSongName("s03");
//library.printPlaylistName("p01");
//library.printAllPlaylistNames();
//library.printPlaylistSongs("p01");


// library.addSong();
// console.log(library.songs);
// library.printAllSongNames();


// library.addSongToPlaylist("s02", "p01");
// library.printPlaylistSongs("p01");
// console.log(library.playlists.p01);

// library.addPlaylist("fufufu", ["s01","s03","s04"])
// console.log(library.playlists);
// console.log(library.playlists.p03.id);
// console.log(library.playlists.p03.name);
// console.log(library.playlists.p03.tracks);





