(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const notification = document.querySelector('.notification');
  const notificationTitle = document.getElementById('notification-title');
  const notificationMessage = document.getElementById('notification-message');
  const closeButton = document.querySelector('.notification-close');
  const emailServiceAvailable = Boolean(window.emailjs && typeof window.emailjs.sendForm === 'function');
  if (emailServiceAvailable && typeof window.emailjs.init === 'function') {
    window.emailjs.init('D3ovWYL2zw3ARlBrN');
  }

  let isSending = false;
  let notificationTimeout;

  function showNotification(title, message) {
    if (!notification || !notificationTitle || !notificationMessage) return;
    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    notification.hidden = false;
    window.clearTimeout(notificationTimeout);
    notificationTimeout = window.setTimeout(() => { notification.hidden = true; }, 6000);
  }

  if (closeButton && notification) {
    closeButton.addEventListener('click', () => {
      notification.hidden = true;
      window.clearTimeout(notificationTimeout);
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (isSending) return;
    if (!form.reportValidity()) return;
    if (!emailServiceAvailable) {
      showNotification('Service unavailable', 'Email service could not be reached. Please contact me directly at habibunayka@gmail.com.');
      return;
    }

    const submitButton = form.querySelector('[type="submit"]');
    isSending = true;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.innerHTML;
      submitButton.innerHTML = 'Sending…';
    }

    try {
      await window.emailjs.sendForm('service_5h5b8qg', 'template_g6x1wfh', form);
      showNotification('Message sent', 'Thanks for reaching out. Your message was sent successfully.');
      form.reset();
    } catch (error) {
      const safeMessage = error && typeof error.text === 'string' ? error.text : 'Please try again, or email me directly.';
      showNotification('Could not send message', safeMessage);
    } finally {
      isSending = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = submitButton.dataset.originalText || 'Send message ↗';
      }
    }
  });
})();
