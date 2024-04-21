function albums() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums');
    xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        
        let albums = JSON.parse(xhr.responseText);
        let albumsContainer = document.getElementById('albums');

        albums.forEach(function(album) {
            let albumDiv = document.createElement('div');
            albumDiv.classList.add('album');
            albumDiv.innerHTML = `
            <p>UserId: ${album.userId}</p>
            <p>Id: ${album.id}</p>
            <p>Title: ${album.title}</p>
            `;
            albumsContainer.appendChild(albumDiv);
        });

    } else {
        console.error('Запрос не выполнен');
    }
    };

    xhr.onerror = function() {
        console.error('При выполнении запроса произошла ошибка :(');
    };
    
    xhr.send();
}

albums();