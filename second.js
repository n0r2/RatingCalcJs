$.ajax({
    url:'https://chunithm-net.com/mobile/MusicGenre.html',
    method:'POST',
    data:{
        genre:'99',
        level:'master',
        music_genre:'music_genre'
    },
}).done(function(data) {
    console.log(data)
});