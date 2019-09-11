window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight > demoImgDiv.offsetHeight + demoImgDiv.offsetTop + 100) {
    demoImg.src = 'img/greenfly_product_conversation_drilldown.png'
  } else if (window.scrollY + window.innerHeight > demoImgDiv.offsetHeight + demoImgDiv.offsetTop) {
    demoImg.src = 'img/greenfly_product_conversation_overview.png'
  } else {
    demoImg.src = 'img/greenfly_product_customer_overview.png'
  }
})