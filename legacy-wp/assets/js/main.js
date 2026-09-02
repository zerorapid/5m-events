(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    if (window.lucide) {
      lucide.createIcons();
    }

    /* Mobile menu toggle */
    var toggle = document.getElementById('menuToggle');
    var navMenu = document.getElementById('navMenu');
    if (toggle && navMenu) {
      toggle.addEventListener('click', function () {
        var open = navMenu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    /* Popups (data-popup="id" on open/close triggers) */
    document.querySelectorAll('[data-popup]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var popup = document.getElementById(el.getAttribute('data-popup'));
        if (!popup) return;
        if (el.classList.contains('popup-close')) {
          popup.classList.remove('active');
          document.body.style.overflow = '';
        } else {
          popup.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    document.querySelectorAll('.popup').forEach(function (popup) {
      popup.addEventListener('click', function (e) {
        if (e.target === popup) {
          popup.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    /* FAQ accordion */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.parentElement;
        var isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('active'); });
        var span = btn.querySelector('span');
        if (!isActive) {
          item.classList.add('active');
          if (span) span.textContent = '\u2212';
        } else if (span) {
          span.textContent = '+';
        }
      });
    });

    /* Portfolio filter (client-side, no reload) */
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var category = btn.getAttribute('data-filter');
        document.querySelectorAll('#portfolioGrid .portfolio-item').forEach(function (item) {
          var match = category === 'all' || item.getAttribute('data-category') === category;
          item.style.display = match ? '' : 'none';
        });
      });
    });

    /* AJAX quote popup form */
    var quoteForm = document.getElementById('quoteForm');
    if (quoteForm && window.fivemData) {
      quoteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var noticeSlot = quoteForm.parentElement.querySelector('.form-notice-slot');
        var submitBtn = quoteForm.querySelector('button[type="submit"]');
        var formData = new FormData(quoteForm);
        formData.append('action', 'fivem_quote_form');
        formData.append('nonce', window.fivemData.nonce);

        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }

        fetch(window.fivemData.ajaxUrl, { method: 'POST', body: formData })
          .then(function (res) { return res.json(); })
          .then(function (data) {
            if (noticeSlot) {
              noticeSlot.innerHTML = '<div class="form-notice ' + (data.success ? 'success' : 'error') + '">' +
                (data.data && data.data.message ? data.data.message : 'Something went wrong.') + '</div>';
            }
            if (data.success) { quoteForm.reset(); }
          })
          .catch(function () {
            if (noticeSlot) {
              noticeSlot.innerHTML = '<div class="form-notice error">Something went wrong. Please try again or call us directly.</div>';
            }
          })
          .finally(function () {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Submit Inquiry'; }
          });
      });
    }

  });
})();
