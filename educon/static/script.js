document.addEventListener('DOMContentLoaded', function () {
    const courseSearchInput = document.getElementById('courseSearch');
    const searchForm = document.getElementById('searchForm');
    const courseSuggestionsList = document.getElementById('courseSuggestions');

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
            searchForm.submit();
        }
    });

    function displaySuggestions(suggestions) {
        courseSuggestionsList.innerHTML = '';
    
        const maxSuggestionsToShow = 5; // Adjust the maximum number of visible suggestions
    
        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            listItem.addEventListener('click', function () {
                // Redirect or perform any other action when a suggestion is clicked
                alert('You clicked on: ' + suggestion);
            });
    
            courseSuggestionsList.appendChild(listItem);
        });
    
        // Show or hide the scroller based on the number of suggestions
        if (suggestions.length > maxSuggestionsToShow) {
            courseSuggestionsList.style.overflowY = 'scroll';
            courseSuggestionsList.style.maxHeight = '200px'; // Adjust the maximum height as needed
        } else {
            courseSuggestionsList.style.overflowY = 'hidden';
            courseSuggestionsList.style.maxHeight = 'auto';
        }
    }    

    // Hide suggestions when clicking outside the input and suggestion list
    document.addEventListener('click', function (event) {
        if (!courseSearchInput.contains(event.target) && !courseSuggestionsList.contains(event.target)) {
            courseSuggestionsList.style.display = 'none';
        }
    });

    function redirectToCoursesPage(searchTerm) {
        window.location.href = `courses/?search=${encodeURIComponent(searchTerm)}`;
    }
});
