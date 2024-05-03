
        // Initialize Isotope
        var $isotopeContainer = $('#isotope-container').isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows', // or other layout modes
        });

        // Filtering functionality
        $('#filter-buttons').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $isotopeContainer.isotope({ filter: filterValue });
        });
    