export const avoidBackgroundScrolling = ((isMobile, isDialogOpened) => {
    let bodyTag = document.getElementsByTagName("body")[0];
    if (isMobile && isDialogOpened) {
      bodyTag.style.overflow = "hidden";
    } else {
      bodyTag.style.overflow = "";
    }
  }
);