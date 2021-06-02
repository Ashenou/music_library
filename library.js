const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  let line = "";
  for (const obj in library) {
    if (obj === "playlists") {
      console.log(`-----`);
      for (const playList in library[obj]) {
        line += playList + " : ";
        line += library[obj][playList]["name"];
        for (const p in library[obj][playList]) {
          if (p === "tracks") {
            line += ` - ${library[obj][playList][p].length} tracks \n`;
          }
        }
      }
    }
  }
  console.log(line);
};

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  let line = "";
  for (const obj in library) {
    if (obj === "tracks") {
      for (const track in library[obj]) {
        line += track + ": ";
        line += library[obj][track]["name"];
        for (const detail in library[obj][track]) {
          if (detail === "artist") {
            line += ` by ${library[obj][track][detail]} `;
          } else if (detail === "album") {
            line += `(${library[obj][track][detail]}) \n`;
          }
        }
      }
    }
  }
  console.log(line);
};

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  let line = "" + playlistId + ": ";
  let tracksIDs = [];
  //console.log(library["playlists"][playlistId]);
  for (const detail in library["playlists"][playlistId]) {
    if (detail !== "tracks" && detail !== "id") {
      line += `${library["playlists"][playlistId][detail]}`;
    } else {
      tracksIDs = library["playlists"][playlistId][detail];
    }
  }
  line += " - " + tracksIDs.length;
  for (const trackId of tracksIDs) {
    line +=
      " tracks" +
      "\n" +
      trackId +
      ": " +
      library["tracks"][trackId].name +
      " by " +
      library["tracks"][trackId].artist +
      " (" +
      library["tracks"][trackId].album +
      ")";
  }

  console.log(line);
};

// adds an existing track to an existing playlist
const addTrackToPlaylist = (function (trackId, playlistId) {
  library["playlists"][playlistId]["tracks"].push(trackId);
})("t03", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = (function (name, artist, album) {
  let uid = generateUid();
  let newTrack = {[uid] : {"id": uid, "name": name, "artist": artist, "album": album }};
  console.log(newTrack);
  Object.assign(library["tracks"], newTrack);
  console.log(library["tracks"]);

});

// adds a playlist to the library
const addPlaylist = function (name) {

  let newPlaylist = {[name]:{id:"", name:"", tracks:""}};
  Object.assign(library["playlists"], newPlaylist);
}("p03");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};
