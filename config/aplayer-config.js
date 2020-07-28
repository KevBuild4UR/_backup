const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
        name: 'name',
        artist: 'artist',
        url: 'url.mp3',
        cover: 'cover.jpg'
    }]
});
