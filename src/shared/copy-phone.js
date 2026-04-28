// 复制电话号码到剪贴板

export function copyPhone() {
  const phone = '13619222442';
  navigator.clipboard.writeText(phone).then(() => {
    const btn = document.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ri-check-line text-accent"></i> 已复制到剪贴板';
    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    console.error('复制失败:', err);
  });
}
