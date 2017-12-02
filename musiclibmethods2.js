function overallRating() {
const totalRatings = this.tracks.reduce(function(sum, track) {
    return sum + track.rating;
  }, 0);
  return totalRatings / this.tracks.length;
}

function totalDuration() {
  return this.tracks.reduce(function(duration, track) {
    return duration + track.length;
  }, 0);
}

function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = []
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = []
  }
  overallRating() {
    const totalRatings = this.tracks.reduce(function(sum, track) {
      return sum + track.rating;
    }, 0);
    return totalRatings / this.tracks.length;
  }
  totalDuration() {
    return this.tracks.reduce(function(duration, track) {
      return duration + track.length;
    }, 0);
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length
  }
}

const l = new Library()

const p = new Playlist('Chillout');

const t1 = new Track('Wayfaring Stranger', 5, 271);
const t2 = new Track('Paradis Perdus', 5, 218);

l.playlists.push(p);
p.tracks.push(t1);
p.tracks.push(t2);

console.log(p instanceof Playlist);
console.log(p.overallRating());
console.log(p.totalDuration());
