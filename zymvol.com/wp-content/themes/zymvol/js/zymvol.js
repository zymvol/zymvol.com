(function($) {
	'use strict';
	var zymvol = zymvol || {};
	$(document).ready(function() {
		zymvol.publicProjectsAnhors();
		zymvol.publicProjectsLinks();
		zymvol.modalLinks();
		zymvol.initModalHashHandling();
	});

	zymvol.publicProjectsAnhors = function() {
		var hash = window.location.hash.replace('#', '');
		if (!hash) {
			return;
		};
		var $link = $('.projects-section .projects-section-nav-item[data-id="' + hash + '"]');
		if (!$link.length) {
			return;
		}
		$([document.documentElement, document.body]).animate({
			scrollTop: $link.closest('.projects-section').offset().top
		}, 300, 'swing', function() {
			$link.get(0).click();
		});
	}

	zymvol.publicProjectsLinks = function() {
		var $links = $('.projects-section .projects-section-nav-item[data-id]');
		if (!$links.length) {
			return;
		}
		$links.on('click', function(e) {
			e.preventDefault();
			var id = $(this).data('id');
			var baseUrl = $(this).closest('.projects-section').data('baseurl');
			window.history.pushState('', '', baseUrl + '#' + id);
		});
	}

	zymvol.modalLinks = function(){
		var hash = window.location.hash.replace('#', '');
		if (!hash) {
			return;
		};
		var $link = $('[data-trigger_modal="'+hash+'"]');
		if ($link.length) {
			console.log('click');
			$link.get(0).click();
		}
	}

	zymvol.initModalHashHandling = function() {
		var hash = window.location.hash;
		if (hash && hash.startsWith('#modal-solutions-') || hash === '#sign-up-modal' || hash === '#contact-modal') {
			var modalId = hash.substring(1);
			var $modal = $('#' + modalId);
			if ($modal.length) {
				var modal = new bootstrap.Modal($modal[0]);
				modal.show();
			}
		}

		$('[data-bs-toggle="modal"]').on('click', function() {
			var href = $(this).attr('data-bs-target');
			if (href && href.startsWith('#modal-solutions-') || href === '#sign-up-modal' || href === '#contact-modal') {
				var newUrl = window.location.pathname + href;
				window.history.pushState('', '', newUrl);
			}
		});


		$('.modal').on('hidden.bs.modal', function() {
			var currentHash = window.location.hash;
			if (currentHash && currentHash.startsWith('#modal-solutions-') || currentHash === '#sign-up-modal' || currentHash === '#contact-modal') {
				window.history.pushState('', '', window.location.pathname);
			}
		});
	}

})(jQuery);