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
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function () {
    let line = "";
    for (const obj in this) {
      if (obj === "tracks") {
        for (const track in this[obj]) {
          line += track + ": ";
          line += this[obj][track]["name"];
          for (const detail in this[obj][track]) {
            if (detail === "artist") {
              line += ` by ${this[obj][track][detail]} `;
            } else if (detail === "album") {
              line += `(${this[obj][track][detail]}) \n`;
            }
          }
        }
      }
    }
    console.log(line);
  },

  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    let line = "" + playlistId + ": ";
    let tracksIDs = [];
    //console.log(library["playlists"][playlistId]);
    for (const detail in this["playlists"][playlistId]) {
      if (detail !== "tracks" && detail !== "id") {
        line += `${this["playlists"][playlistId][detail]}`;
      } else {
        tracksIDs = this["playlists"][playlistId][detail];
      }
    }
    line += " - " + tracksIDs.length;
    for (const trackId of tracksIDs) {
      line +=
        " tracks" +
        "\n" +
        trackId +
        ": " +
        this["tracks"][trackId].name +
        " by " +
        this["tracks"][trackId].artist +
        " (" +
        this["tracks"][trackId].album +
        ")";
    }

    console.log(line);
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    this["playlists"][playlistId]["tracks"].push(trackId);
  },

  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },
  // adds a track to the library
  addTrack: function (name, artist, album) {
    let uid = this.generateUid();
    let newTrack = {
      [uid]: { id: uid, name: name, artist: artist, album: album },
    };
    console.log(newTrack);
    Object.assign(this["tracks"], newTrack);
    console.log(this["tracks"]);
  },

  // adds a playlist to the library
  addPlaylist: function (name) {
    let newPlaylist = { [name]: { id: "", name: "", tracks: "" } };
    Object.assign(this["playlists"], newPlaylist);
  },
};
