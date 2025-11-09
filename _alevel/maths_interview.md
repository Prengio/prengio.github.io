---
layout: page
title: Maths Interview
importance:

img: assets/img/mathsint.png

usemathjax: true
giscus_comments: true

---


Here is a collection of resources on maths interviews.


<iframe src="https://drive.google.com/embeddedfolderview?id=1bHjNXYO_hVUqL5YaIkIkIWXogZarN9P-"
        width="100%" height="600" frameborder="0"
        style="background: #1e1e1e; filter: invert(0.89) hue-rotate(140deg);"></iframe>

<script>
  const iframe = document.getElementById('drive-iframe');
  
  const observer = new MutationObserver(() => {
    if (document.body.classList.contains('dark-mode')) {
      iframe.style.filter = 'invert(1) hue-rotate(180deg) brightness(0.9)';
    } else {
      iframe.style.filter = '';
    }
  });

  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
</script>
