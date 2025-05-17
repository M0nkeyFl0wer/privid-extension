document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const button = document.getElementById('verifyBtn');

  button.addEventListener('click', () => {
    status.textContent = 'Verifying...';

    // Simulate a Holonym verification delay
    setTimeout(() => {
      status.textContent = 'Verified';
    }, 2000);
  });
});
