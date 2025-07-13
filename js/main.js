
document.getElementById('searchBox').addEventListener('input', function() {
  const search = this.value.toLowerCase();
  const gallery = document.getElementById('galleryItems');
  const images = gallery.getElementsByTagName('img');

  for (let img of images) {
    const altText = img.alt.toLowerCase();
    img.style.display = altText.includes(search) ? 'block' : 'none';
  }
});
