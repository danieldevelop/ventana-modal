const dialog = document.querySelector('dialog');
const dialogOpen = document.querySelector('#btn-modal');
const dialogClose = document.querySelector('#btn-cancel');

dialogOpen.addEventListener('click', () => dialog.showModal());

dialogClose.addEventListener('click', () => dialog.close());