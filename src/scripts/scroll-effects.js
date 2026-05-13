/**
 * 滚动交互效果 - 文章详情页
 * 功能：文章头部视差滚动、返回顶部按钮状态
 */

document.addEventListener('DOMContentLoaded', () => {
  const postHeader = document.querySelector('.post-header');
  const postContent = document.querySelector('.post-content');

  if (!postHeader) return;

  let ticking = false;
  let lastScrollY = 0;

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  function update() {
    const scrollY = lastScrollY;
    const headerHeight = postHeader.offsetHeight;

    // 文章头部视差效果 - 轻微上移 + 透明度渐变
    if (scrollY < headerHeight * 1.5) {
      const progress = Math.min(scrollY / (headerHeight * 1.2), 1);
      const translateY = scrollY * 0.15;
      const opacity = 1 - progress * 0.3;

      postHeader.style.transform = `translateY(${translateY}px)`;
      postHeader.style.opacity = String(Math.max(opacity, 0.7));
    } else {
      postHeader.style.transform = 'translateY(0)';
      postHeader.style.opacity = '0.7';
    }

    // 文章内容区轻微视差
    if (postContent && scrollY > headerHeight) {
      const contentProgress = Math.min((scrollY - headerHeight) / 200, 1);
      postContent.style.transform = `translateY(${contentProgress * 4}px)`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // 初始化
  update();
});
