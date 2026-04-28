// 导航菜单切换 + 当前页高亮

export function initNav() {
  const navTriggerBtn = document.querySelector("#nav_trigger_btn");
  const navMenu = document.querySelector("#nav_menu");
  const navLinks = document.querySelectorAll("#nav_menu a");

  if (!navTriggerBtn || !navMenu) return;

  // 移动端菜单切换
  navTriggerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav-is-open");
    if (navMenu.classList.contains("nav-is-open")) {
      navMenu.style.height = "350px";
    } else {
      navMenu.style.height = "0px";
    }
  });

  // 点击链接后关闭移动端菜单
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("nav-is-open");
      navMenu.style.height = "0px";
    });
  });

  // 当前页高亮
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    navLinks.forEach((link) => {
      if (link.dataset.page === currentPage) {
        link.classList.add('text-accent', 'font-bold');
      }
    });
  }
}
