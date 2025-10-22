export const smoothScrollToAnchor = (selector: string) => {
  const element = document.querySelector(selector);
  if(element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  }
}