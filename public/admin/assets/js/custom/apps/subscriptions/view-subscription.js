/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo1/src/js/custom/apps/subscriptions/view-subscription.js ***!
  \*************************************************************************************************/


var KTSubscriptionsView = function () {

    var initSubscriptionsView = function () {
        // Define variables
        const cancelButton = document.querySelectorAll('[data-kt-subscriptions-view-action="delete"]');

        // Handle cancel subscription button
        cancelButton.forEach(button => {
            button.addEventListener('click', e => {
                e.preventDefault();
    
                Swal.fire({
                    text: "Are you sure you would like to cancel this subscription?",
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
                        Swal.fire({
                            text: "The subscription has not been cancelled!.",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            }
                        });
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: "Your cancellation was not completed!.",
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

    return {
        init: function () {
            initSubscriptionsView();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTSubscriptionsView.init();
});
/******/ })()
;
//# sourceMappingURL=view-subscription.js.map