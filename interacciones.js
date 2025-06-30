
document.querySelectorAll('.abrir-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const titulo = btn.getAttribute('data-title');
    const descripcion = btn.getAttribute('data-description');

    document.getElementById('modalTitle').textContent = titulo;
    document.getElementById('modalDescription').textContent = descripcion;

    document.getElementById('modalPopup').style.display = 'flex';
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('modalPopup').style.display = 'none';
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('modalPopup');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
