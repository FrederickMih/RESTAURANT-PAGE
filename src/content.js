const displayContent = (pageName) => {
  const content = document.getElementsByClassName("main");
  for (let i = 0; i < content.length; i += 1) {
    content[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
};
export default displayContent;
