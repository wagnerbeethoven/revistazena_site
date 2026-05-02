// Random header background
window.onload = function () {
  var imgr = Math.round(Math.random() * 9);
  document.getElementById('header-paint').classList.add('header-paint-' + imgr);
};

// Scroll to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// AdSense auto ads
(adsbygoogle = window.adsbygoogle || []).push({
  google_ad_client: "ca-pub-5339434063695831",
  enable_page_level_ads: true
});

// Responsive iframes (vanilla JS)
window.addEventListener('load', function () {
  var iframes = document.querySelectorAll('iframe');
  if (!iframes.length) return;

  iframes.forEach(function (iframe) {
    if (iframe.width && iframe.height) {
      iframe.dataset.ratio = iframe.height / iframe.width;
      iframe.removeAttribute('width');
      iframe.removeAttribute('height');
    }
  });

  function resizeIframes() {
    iframes.forEach(function (iframe) {
      if (!iframe.dataset.ratio) return;
      var width = iframe.parentElement.offsetWidth;
      iframe.style.width = width + 'px';
      iframe.style.height = (width * parseFloat(iframe.dataset.ratio)) + 'px';
    });
  }

  window.addEventListener('resize', resizeIframes);
  resizeIframes();
});
