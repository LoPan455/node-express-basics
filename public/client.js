

$(document).ready(function(){
  console.log('jQuery was successfully sourced');
  getAllSongs();
  function getAllSongs(){
    $.ajax({
      type: 'GET',
      url: '/songs',
      success: function(response) {
        console.log('response', response);
      },
      error: function(error) {
        console.log('there was an error');
      }

    });
  }



  $('#addSongButton').on('click',function(){
    var newSongTitle = $('#title').val();
    var newSongArtist = $('#artist').val();
    var newSongObject = {
      title: newSongTitle,
      artist: newSongArtist
    };
    console.log(newSongObject);
    $.ajax({
      type: "POST",
      url: '/newSong',
      data: newSongObject,
      success: function(response){
        console.log('response is ',response);
        getAllSongs()
      },
      error: function(error) {
        console.log('there was an error');
      }


    })
  })






});//end of document ready
