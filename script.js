document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const studentCards = document.querySelectorAll('.student-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            filterStudents(searchTerm);
        });
    }

    /**
     * Filters the student cards based on a search term.
     * It checks student data attributes (name, id, course) for matches.
     * @param {string} term - The search query.
     */
    function filterStudents(term) {
        studentCards.forEach(card => {
            // Retrieve data attributes for comprehensive searching
            const studentName = card.getAttribute('data-name') || '';
            const studentId = card.getAttribute('data-id') || '';
            const studentCourse = card.getAttribute('data-course') || '';
            
            // Combine searchable fields into a single, lowercased string
            const searchContent = (studentName + ' ' + studentId + ' ' + studentCourse).toLowerCase();

            // Determine visibility
            const isMatch = searchContent.includes(term);

            if (isMatch) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Ensure initial state is visible if script loads correctly
    filterStudents('');
});
<!-- updated: 2025-10-17T17:13:16.442249 -->