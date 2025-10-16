'use strict';

let redirect_url = document.querySelector("meta[name='ssp-comment-redirect-url']").getAttribute("content");
let comment_endpoint = atob(document.querySelector("meta[name='ssp-comment-endpoint']").getAttribute("content"));

function success(el, redirect_url) {
    el.target.submit.disabled = false;

    if (el.target.querySelector('input[type="submit"]')) {
        el.target.querySelector('input[type="submit"]').blur();
    }

    el.target.reset();

    // Redirect if set
    if (redirect_url.length > 0) {
        window.location.replace(redirect_url);
    }
}

function submitForm(method, url, redirect_url, data, el) {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
            success(el, redirect_url);
        }
    };

    xhr.send(data);
}

function modifyFormAttributes(form) {
    form.removeAttribute("action");
    form.removeAttribute("method");
    form.removeAttribute("enctype");
    form.removeAttribute("novalidate");
}

document.addEventListener("DOMContentLoaded", function () {
    const allForms = document.querySelectorAll(
        "#commentform"
    );

    allForms.forEach((form) => {
        modifyFormAttributes(form);

        // Inputs
        const inputs = form.querySelectorAll("input");

        // Add HTML required attribute
        inputs.forEach((input) => {
            if (input.getAttribute("aria-required") === "true") {
                input.required = true;
            }
        });

        form.addEventListener("submit", function (el) {
            el.preventDefault();

            let data = new FormData(form);
            submitForm("POST", comment_endpoint, redirect_url, data, el);
        });
    });
});
