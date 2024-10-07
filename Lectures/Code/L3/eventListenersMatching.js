const handleMouseDown = () => {};

const div = document.querySelector('div');

div.addEventListener('mousedown', handleMouseDown, true);

div.removeEventListener('mousedown', handleMouseDown, false); // -
div.removeEventListener('mousedown', handleMouseDown, true); // +

div.addEventListener('mousedown', handleMouseDown, { passive: true });

div.removeEventListener('mousedown', handleMouseDown, { passive: true }); // +
div.removeEventListener('mousedown', handleMouseDown, { capture: false }); // +
div.removeEventListener('mousedown', handleMouseDown, { capture: true }); // -
div.removeEventListener('mousedown', handleMouseDown, { passive: false }); // -
div.removeEventListener('mousedown', handleMouseDown, false); // +
div.removeEventListener('mousedown', handleMouseDown, true); // -
