const header = document.getElementById("header");

const setHeaderHeight = () => {
  document.documentElement.style.setProperty(
    "--header-height",
    `${header?.offsetHeight}px`,
  );
};

window.onresize = setHeaderHeight;
document.addEventListener("DOMContentLoaded", setHeaderHeight);
