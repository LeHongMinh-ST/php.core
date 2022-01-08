"use strict";

// Class definition
var KTAppInvoicesCreate = function () {
    var form;

	// Private functions
	var handeForm = function (element) {
		
	}

	var initForm = function(element) {
		// Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/
		var invoiceDate = $(form.querySelector('[name="invoice_date"]'));
		invoiceDate.flatpickr({
			enableTime: true,
			dateFormat: "d, M Y, H:i",
		});

        // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/
		var dueDate = $(form.querySelector('[name="invoice_due_date"]'));
		dueDate.flatpickr({
			enableTime: true,
			dateFormat: "d, M Y, H:i",
		});
	}

	// Public methods
	return {
		init: function(element) {
            form = document.querySelector('#kt_invoice_form');

			handeForm();
            initForm();
        }
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTAppInvoicesCreate.init();
});
