document.addEventListener('DOMContentLoaded', function () {
    const courseSearchInput = document.getElementById('courseSearch');
    const courseSuggestionsList = document.getElementById('courseSuggestions');

    //Mock data for course suggestions (replace with data from your database)
    // const courseSuggestionsData = [
    //     'Advanced Web Development',
    //     'Data Science Fundamentals',
    //     'Graphic Design Basics',
    //     'JavaScript for Beginners',
    //     'Machine Learning with Python',
    //     // Add more course suggestions as needed
    // ];
    const courseSuggestionsData = courseNames;
    courseSearchInput.addEventListener('input', function () {
        const searchTerm = courseSearchInput.value.toLowerCase();
        const filteredSuggestions = courseSuggestionsData.filter(course =>
            course.toLowerCase().includes(searchTerm)
        );

        displaySuggestions(filteredSuggestions);
    });

    courseSearchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            redirectToCoursesPage(courseSearchInput.value.trim());
        }
    });

    function displaySuggestions(suggestions) {
        courseSuggestionsList.innerHTML = '';

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            listItem.addEventListener('click', function () {
                // Redirect or perform any other action when a suggestion is clicked
                alert('You clicked on: ' + suggestion);
            });

            courseSuggestionsList.appendChild(listItem);
        });
    }

    // Hide suggestions when clicking outside the input and suggestion list
    document.addEventListener('click', function (event) {
        if (!courseSearchInput.contains(event.target) && !courseSuggestionsList.contains(event.target)) {
            courseSuggestionsList.style.display = 'none';
        }
    });

    function redirectToCoursesPage(searchTerm) {
        window.location.href = `courses.html?search=${encodeURIComponent(searchTerm)}`;
    }
});
