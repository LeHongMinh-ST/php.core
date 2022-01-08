/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/add-payment.js":
/*!***************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/add-payment.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTModalAddPayment = function () {
    var element;
    var submitButton;
    var cancelButton;
    var closeButton;
    var validator;
    var newBalance;
    var form;
    var modal;

    // Init form inputs
    var initForm = function () {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'invoice': {
                        validators: {
                            notEmpty: {
                                message: 'Invoice number is required'
                            }
                        }
                    },
                    'status': {
                        validators: {
                            notEmpty: {
                                message: 'Invoice status is required'
                            }
                        }
                    },
                    'amount': {
                        validators: {
                            notEmpty: {
                                message: 'Invoice amount is required'
                            }
                        }
                    }
                },

                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );

        // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="status"]')).on('change', function () {
            // Revalidate the field when an option is chosen
            validator.revalidateField('status');
        });

        // Action buttons
        submitButton.addEventListener('click', function (e) {
            // Prevent default button action
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;

                        // Simulate form submission
                        setTimeout(function () {
                            // Simulate form submission
                            submitButton.removeAttribute('data-kt-indicator');

                            // Show popup confirmation 
                            Swal.fire({
                                text: "Form has been successfully submitted!",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    modal.hide();

                                    // Enable submit button after loading
                                    submitButton.disabled = false;

                                    // Reset form for demo purposes only
                                    form.reset();
                                    newBalance.innerHTML = "--";
                                }
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    } else {
                        // Show popup warning 
                        Swal.fire({
                            text: "Sorry, looks like there are some errors detected, please try again.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    }
                });
            }
        });

        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });

        closeButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    }

    return {
        // Public functions
        init: function () {
            // Elements
            element = document.querySelector('#kt_modal_add_payment');
            modal = new bootstrap.Modal(element);

            form = element.querySelector('#kt_modal_add_payment_form');
            submitButton = form.querySelector('#kt_modal_add_payment_submit');
            cancelButton = form.querySelector('#kt_modal_add_payment_cancel');
            closeButton = element.querySelector('#kt_modal_add_payment_close');

            initForm();
        }
    };
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTModalAddPayment;
}

/***/ }),

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/adjust-balance.js":
/*!******************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/adjust-balance.js ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTModalAdjustBalance = function () {
    var element;
    var submitButton;
    var cancelButton;
    var closeButton;
    var validator;
    var maskInput;
    var newBalance;
    var form;
    var modal;

    // Init form inputs
    var initForm = function () {
        // Init inputmask plugin --- For more info please refer to the official documentation here: https://github.com/RobinHerbots/Inputmask
        Inputmask("US$ 9,999,999.99", {
            "numericInput": true
        }).mask("#kt_modal_inputmask");
    }

    var handleBalanceCalculator = function () {
        // Select elements
        const currentBalance = element.querySelector('[kt-modal-adjust-balance="current_balance"]');
        newBalance = element.querySelector('[kt-modal-adjust-balance="new_balance"]');
        maskInput = document.getElementById('kt_modal_inputmask');

        // Get current balance value
        let currentValue = parseFloat(currentBalance.innerHTML.replace(/[^0-9.]/g, '').replace(',', ''));

        // On change event for inputmask
        let maskValue;
        maskInput.addEventListener('change', function (e) {
            // Get inputmask value on change
            maskValue = parseFloat(e.target.value.replace(/[^0-9.]/g, '').replace(',', ''));

            // Set mask value as 0 when NaN detected
            if(isNaN(maskValue)){
                maskValue = 0;
            }

            // Calculate & set new balance value
            newBalance.innerHTML = 'US$ ' + (maskValue + currentValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
    }

    // Handle form validation and submittion
    var handleForm = function () {
        // Stepper custom navigation

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'adjustment': {
                        validators: {
                            notEmpty: {
                                message: 'Adjustment type is required'
                            }
                        }
                    },
                    'amount': {
                        validators: {
                            notEmpty: {
                                message: 'Amount is required'
                            }
                        }
                    }
                },

                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );

        // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="adjustment"]')).on('change', function () {
            // Revalidate the field when an option is chosen
            validator.revalidateField('adjustment');
        });

        // Action buttons
        submitButton.addEventListener('click', function (e) {
            // Prevent default button action
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;

                        // Simulate form submission
                        setTimeout(function () {
                            // Simulate form submission
                            submitButton.removeAttribute('data-kt-indicator');

                            // Show popup confirmation 
                            Swal.fire({
                                text: "Form has been successfully submitted!",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    modal.hide();

                                    // Enable submit button after loading
                                    submitButton.disabled = false;

                                    // Reset form for demo purposes only
                                    form.reset();
                                    newBalance.innerHTML = "--";
                                }
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    } else {
                        // Show popup warning 
                        Swal.fire({
                            text: "Sorry, looks like there are some errors detected, please try again.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    }
                });
            }
        });

        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });

        closeButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    }
    
    return {
        // Public functions
        init: function () {
            // Elements
            element = document.querySelector('#kt_modal_adjust_balance');
            modal = new bootstrap.Modal(element);

            form = element.querySelector('#kt_modal_adjust_balance_form');
            submitButton = form.querySelector('#kt_modal_adjust_balance_submit');
            cancelButton = form.querySelector('#kt_modal_adjust_balance_cancel');
            closeButton = element.querySelector('#kt_modal_adjust_balance_close');

            initForm();
            handleBalanceCalculator();
            handleForm();
        }
    };
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTModalAdjustBalance;
}

/***/ }),

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/invoices.js":
/*!************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/invoices.js ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTCustomerViewInvoices = function () {

    // Private functions
    // Init current year datatable
    var initInvoiceYearCurrent = function () {
        // Define table element
        const id = '#kt_customer_details_invoices_table_1';
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
            "pageLength": 5,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2020 datatable
    var initInvoiceYear2020 = function () {
        // Define table element
        const id = '#kt_customer_details_invoices_table_2';
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
            "pageLength": 5,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2019 datatable
    var initInvoiceYear2019 = function () {
        // Define table element
        const id = '#kt_customer_details_invoices_table_3';
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
            "pageLength": 5,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2018 datatable
    var initInvoiceYear2018 = function () {
        // Define table element
        const id = '#kt_customer_details_invoices_table_4';
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
            "pageLength": 5,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Public methods
    return {
        init: function () {
            initInvoiceYearCurrent();
            initInvoiceYear2020();
            initInvoiceYear2019();
            initInvoiceYear2018();
        }
    }
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTCustomerViewInvoices;
}

/***/ }),

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/main.js":
/*!********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/main.js ***!
  \********************************************************************************************/
/***/ (() => {

"use strict";


// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTCustomerViewPaymentTable.init();
    KTCustomerViewInvoices.init();
	KTCustomerViewStatements.init();
	KTCustomerViewPaymentMethod.init();
	KTModalAddPayment.init();
	KTModalAdjustBalance.init();
	KTModalUpdateCustomer.init();	
});

/***/ }),

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/payment-method.js":
/*!******************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/payment-method.js ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTCustomerViewPaymentMethod = function () {

    // Private functions
    var initPaymentMethod = function () {
        // Define variables
        const table = document.getElementById('kt_customer_view_payment_method');
        const tableRows = table.querySelectorAll('[ data-kt-customer-payment-method="row"]');

        tableRows.forEach(row => {
            // Select delete button
            const deleteButton = row.querySelector('[data-kt-customer-payment-method="delete"]');

            // Delete button action
            deleteButton.addEventListener('click', e => {
                e.preventDefault();

                // Popup confirmation
                Swal.fire({
                    text: "Are you sure you would like to delete this card?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, return",
                    customClass: {
                        confirmButton: "btn btn-primary",
                        cancelButton: "btn btn-active-light"
                    }
                }).then(function (result) {
                    if (result.value) {
                        row.remove();
                        modal.hide(); // Hide modal				
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: "Your card was not deleted!.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            }
                        });
                    }
                });
            });
        });
    }

    // Handle set as primary button
    const handlePrimaryButton = () => {
        // Define variable
        const button = document.querySelector('[data-kt-payment-mehtod-action="set_as_primary"]');

        button.addEventListener('click', e => {
            e.preventDefault();

            // Popup confirmation
            Swal.fire({
                text: "Are you sure you would like to set this card as primary?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, set it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    Swal.fire({
                        text: "Your card was set to primary!.",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your card was not set to primary!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    };

    // Public methods
    return {
        init: function () {
            initPaymentMethod();
            handlePrimaryButton();
        }
    }
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTCustomerViewPaymentMethod;
}

/***/ }),

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/payment-table.js":
/*!*****************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/payment-table.js ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTCustomerViewPaymentTable = function () {

    // Define shared variables
    var datatable;
    var table = document.querySelector('#kt_table_customers_payment');

    // Private functions
    var initCustomerView = function () {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[3].innerHTML, "DD MMM YYYY, LT").format(); // select date from 4th column in table
            dateRow[3].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "pageLength": 5,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 5 (actions)
            ]
        });
    }

    // Delete customer
    var deleteRows = () => {
        // Select all delete buttons
        const deleteButtons = table.querySelectorAll('[data-kt-customer-table-filter="delete_row"]');
        
        deleteButtons.forEach(d => {
            // Delete button on click
            d.addEventListener('click', function (e) {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get customer name
                const invoiceNumber = parent.querySelectorAll('td')[0].innerText;

                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                Swal.fire({
                    text: "Are you sure you want to delete " + invoiceNumber + "?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, delete!",
                    cancelButtonText: "No, cancel",
                    customClass: {
                        confirmButton: "btn fw-bold btn-danger",
                        cancelButton: "btn fw-bold btn-active-light-primary"
                    }
                }).then(function (result) {
                    if (result.value) {
                        Swal.fire({
                            text: "You have deleted " + invoiceNumber + "!.",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        }).then(function () {
                            // Remove current row
                            datatable.row($(parent)).remove().draw();
                        }).then(function () {
                            // Detect checked checkboxes
                            toggleToolbars();
                        });
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: customerName + " was not deleted.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        });
                    }
                });
            })
        });
    }

    // Public methods
    return {
        init: function () {
            if (!table) {
                return;
            }

            initCustomerView();
            deleteRows();
        }
    }
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTCustomerViewPaymentTable;
}

/***/ }),

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/statement.js":
/*!*************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/statement.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/update-customer.js":
/*!*******************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/update-customer.js ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";


// Class definition
var KTModalUpdateCustomer = function () {
    var element;
    var submitButton;
    var cancelButton;
    var closeButton;
    var form;
    var modal;

    // Init form inputs
    var initForm = function () {
        // Action buttons
        submitButton.addEventListener('click', function (e) {
            // Prevent default button action
            e.preventDefault();

            // Show loading indication
            submitButton.setAttribute('data-kt-indicator', 'on');

            // Simulate form submission
            setTimeout(function () {
                // Simulate form submission
                submitButton.removeAttribute('data-kt-indicator');

                // Show popup confirmation 
                Swal.fire({
                    text: "Form has been successfully submitted!",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                }).then(function (result) {
                    if (result.isConfirmed) {
                        modal.hide();
                    }
                });

                //form.submit(); // Submit form
            }, 2000);
        });

        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });

        closeButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    }

    return {
        // Public functions
        init: function () {
            // Elements
            element = document.querySelector('#kt_modal_update_customer');
            modal = new bootstrap.Modal(element);

            form = element.querySelector('#kt_modal_update_customer_form');
            submitButton = form.querySelector('#kt_modal_update_customer_submit');
            cancelButton = form.querySelector('#kt_modal_update_customer_cancel');
            closeButton = element.querySelector('#kt_modal_update_customer_close');

            initForm();
        }
    };
}();

// Webpack support
if ( true && typeof module.exports !== 'undefined') {
    module.exports = KTModalUpdateCustomer;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************************!*\
  !*** ../../../themes/metronic/html/tools/webpack/js/custom/apps/customers/view.js ***!
  \************************************************************************************/
window.KTModalAddPayment = __webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/add-payment.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/add-payment.js");
window.KTModalAdjustBalance = __webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/adjust-balance.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/adjust-balance.js");
window.KTCustomerViewInvoices = __webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/invoices.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/invoices.js");
window.KTCustomerViewPaymentMethod = __webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/payment-method.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/payment-method.js");
window.KTCustomerViewPaymentTable = __webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/payment-table.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/payment-table.js");
window.KTCustomerViewStatements = __webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/statement.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/statement.js");
window.KTModalUpdateCustomer = __webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/update-customer.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/update-customer.js");
__webpack_require__(/*! @/src/js/custom/apps/customers/view/bundle/main.js */ "../../../themes/metronic/html/demo1/src/js/custom/apps/customers/view/bundle/main.js");

})();

/******/ })()
;
//# sourceMappingURL=view.bundle.js.map