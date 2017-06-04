 //create album objects
var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };
 var albumKehlani = {
     title: 'Sweet',
     artist: 'Kehlani',
     label: 'DLux',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/02.png',
     songs: [
         { title: 'Distraction?', duration: '3:56' },
         { title: 'Advice', duration: '3:23' },
         { title: 'Personal', duration: '3:47'},
         { title: 'Escape', duration: '3:22' },
         { title: 'Keep On', duration: '3:29'}
     ]
 };

//dynamically generate song row content
 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

// #1 select all HTML elements required to display on album page like title, artist etc. we assign corresponding values of album objects' properties to html objects
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

//calls when window loads. takes one of the above album objects as an argument and will use objec'ts stored info by injecting to the template

var setCurrentAlbum = function(album) {
     // #2 set value of the parent container's firstChild to empy strnig 
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3 same as 2, to ensure we work with clean slate
     albumSongList.innerHTML = '';
 
     // #4 for loop thru all songs from album object and insert into HTML , pass in song number, name, length as well
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
     var albums = [albumPicasso, albumMarconi, albumKehlani];
     var index = 1;
     
     albumImage.addEventListener("click", function(event) {
         setCurrentAlbum(albums[index]);
         index++;
         if (index == albums.length) {
             index = 0;
         }
     });
 };