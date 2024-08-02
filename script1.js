document.getElementById('search').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let books = document.querySelectorAll('.book');

    books.forEach(function(book) {
        let title = book.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});
