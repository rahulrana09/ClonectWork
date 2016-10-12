'use strict';

var SearchTableHeader = function() {
    function showFilter() {
        $("#filter").on('click', function() {
            $(".static-headers").toggleClass("hidden");
            $(".filter-headers").toggleClass("hidden");
        });
    }
    
    function responsiveTableSearch() {
        // DataTable
        var table = $('#sample_1').DataTable();

        // Apply the filter
        $("#sample_1 thead input").on( 'keyup change', function () {
            table
                .column( $(this).parent().index()+':visible' )
                .search( this.value )
                .draw();
        } );
    }  
    
    return {
		init: function() {
			showFilter();
            responsiveTableSearch();
		}
	};
}();