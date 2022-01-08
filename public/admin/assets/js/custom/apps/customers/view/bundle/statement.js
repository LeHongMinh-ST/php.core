/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/statement.js":
/*!*************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/statement.js ***!
  \*************************************************************************************************/
/***/ ((module) => {



// Class definition
var KTCustomerViewStatements = function () {

    // Private functions
    // Init current year datatable
    var initStatementYearCurrent = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_1';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2020 datatable
    var initStatementYear2020 = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_2';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2019 datatable
    var initStatementYear2019 = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_3';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2018 datatable
    var initStatementYear2018 = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_4';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Public methods
    return {
        init: function () {
            initStatementYearCurrent();
            initStatementYear2020();
            initStatementYear2019();
            initStatementYear2018();
        }
    }
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTCustomerViewStatements;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/statement.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=statement.js.map