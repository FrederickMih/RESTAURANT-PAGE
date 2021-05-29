
const myFooter = () => {
  
  const footer = document.createElement("footer");
  const footerTitle = document.createElement("h5");
  footerTitle.innerText = "Copyright \u00A9 Mih Frederick";
  footer.appendChild(footerTitle);
  footer.setAttribute("class", "footer");
  footerTitle.setAttribute("class", "fixfooter");
  return footer;
  
};

export default myFooter;
