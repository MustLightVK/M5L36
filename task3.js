function comments() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {

        let comments = JSON.parse(xhr.responseText);
        let commentsContainer = document.getElementById('comments');

        comments.forEach(function(comment) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
            <p><strong>E-mail:</strong> ${comment.email}</p>
            <p><strong>Name:</strong> ${comment.name}</p>
            <p><strong>Body:</strong> ${comment.body}</p>
            `;
            commentsContainer.appendChild(commentDiv);
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

comments();