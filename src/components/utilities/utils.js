// avoiding background scrolling in  mow - when dialog/modal is in open state
export const avoidBackgroundScrolling = ((isMobile, isDialogOpened) => {
    let bodyTag = document.getElementsByTagName("body")[0];
    if (isMobile && isDialogOpened) {
      bodyTag.style.overflow = "hidden";
    } else {
      bodyTag.style.overflow = "";
    }
  }
);

// avoiding background scrolling in both mow & desktop when dialog/modal is in open state
export const avoidBackgroundScrollingInBoth = (isDialogOpened ) =>{
  let bodyTag = document.getElementsByTagName("body")[0];
  if (isDialogOpened) {
    bodyTag.style.overflow = "hidden";
  } else {
    bodyTag.style.overflow = "";
  }
}