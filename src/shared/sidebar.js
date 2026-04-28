// 侧边栏交互（电话/微信/回顶部）

let phoneSticky = false;
let wechatSticky = false;
let backToTopTimer;

function togglePhone() {
  const phoneContent = document.getElementById('phone-content');
  const wechatContent = document.getElementById('wechat-content');
  const phoneIcon = document.getElementById('phone-icon');

  wechatContent.classList.add('hidden');
  wechatSticky = false;
  document.getElementById('wechat-icon').classList.remove('ri-close-line');
  document.getElementById('wechat-icon').classList.add('ri-wechat-fill');

  phoneSticky = !phoneSticky;
  phoneContent.classList.toggle('hidden');
  if (phoneContent.classList.contains('hidden')) {
    phoneIcon.classList.remove('ri-close-line');
    phoneIcon.classList.add('ri-phone-line');
    phoneSticky = false;
  } else {
    phoneIcon.classList.remove('ri-phone-line');
    phoneIcon.classList.add('ri-close-line');
  }
}

function showPhone() {
  clearTimeout(window.phoneHideTimer);
  const phoneContent = document.getElementById('phone-content');
  const phoneIcon = document.getElementById('phone-icon');
  phoneContent.classList.remove('hidden');
  phoneIcon.classList.remove('ri-phone-line');
  phoneIcon.classList.add('ri-close-line');
}

function hidePhone() {
  if (!phoneSticky) {
    window.phoneHideTimer = setTimeout(() => {
      const phoneContent = document.getElementById('phone-content');
      const phoneIcon = document.getElementById('phone-icon');
      phoneContent.classList.add('hidden');
      phoneIcon.classList.remove('ri-close-line');
      phoneIcon.classList.add('ri-phone-line');
    }, 300);
  }
}

function toggleWechat() {
  const phoneContent = document.getElementById('phone-content');
  const wechatContent = document.getElementById('wechat-content');
  const wechatIcon = document.getElementById('wechat-icon');

  phoneContent.classList.add('hidden');
  phoneSticky = false;
  document.getElementById('phone-icon').classList.remove('ri-close-line');
  document.getElementById('phone-icon').classList.add('ri-phone-line');

  wechatSticky = !wechatSticky;
  wechatContent.classList.toggle('hidden');
  if (wechatContent.classList.contains('hidden')) {
    wechatIcon.classList.remove('ri-close-line');
    wechatIcon.classList.add('ri-wechat-fill');
    wechatSticky = false;
  } else {
    wechatIcon.classList.remove('ri-wechat-fill');
    wechatIcon.classList.add('ri-close-line');
  }
}

function showWechat() {
  clearTimeout(window.wechatHideTimer);
  const wechatContent = document.getElementById('wechat-content');
  const wechatIcon = document.getElementById('wechat-icon');
  wechatContent.classList.remove('hidden');
  wechatIcon.classList.remove('ri-wechat-fill');
  wechatIcon.classList.add('ri-close-line');
}

function hideWechat() {
  if (!wechatSticky) {
    window.wechatHideTimer = setTimeout(() => {
      const wechatContent = document.getElementById('wechat-content');
      const wechatIcon = document.getElementById('wechat-icon');
      wechatContent.classList.add('hidden');
      wechatIcon.classList.remove('ri-close-line');
      wechatIcon.classList.add('ri-wechat-fill');
    }, 300);
  }
}

function showBackToTop() {
  clearTimeout(backToTopTimer);
  const backToTopContent = document.getElementById('back-to-top-content');
  backToTopContent.classList.remove('hidden');
}

function hideBackToTop() {
  backToTopTimer = setTimeout(() => {
    const backToTopContent = document.getElementById('back-to-top-content');
    backToTopContent.classList.add('hidden');
  }, 1000);
}

export function initSidebar() {
  window.togglePhone = togglePhone;
  window.showPhone = showPhone;
  window.hidePhone = hidePhone;
  window.toggleWechat = toggleWechat;
  window.showWechat = showWechat;
  window.hideWechat = hideWechat;
  window.showBackToTop = showBackToTop;
  window.hideBackToTop = hideBackToTop;
}
