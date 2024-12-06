function filterContent() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    const blogEntries = document.querySelectorAll('#blogResults .blog-entry');

    blogEntries.forEach(entry => {
        const title = entry.querySelector('h2').textContent.toLowerCase();
        const category = entry.getAttribute('data-category');
        
        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || selectedCategory === category;

        if (matchesSearch && matchesCategory) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
}