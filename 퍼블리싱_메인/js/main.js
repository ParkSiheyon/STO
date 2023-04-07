var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// footer용
// select box 열기
function myFunction() {
  document.querySelector(".footerDropdown").classList.toggle("show");
}
// select box 닫기
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_ft')) {
    var dropdowns = document.getElementsByClassName("ft_dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// 드롭다운
// select box 열기
function myFunction() {
  document.querySelector(".Dropdown").classList.toggle("show");
}
// select box 닫기
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// 모달창 쿼리
const body = document.querySelector('body');
// 모달 애니메이션 추가
// 모달창
function openModal(n){
  const modal = document.querySelector('.popup' + n);
  modal.classList.add('show');
  setTimeout(()=>modal.classList.add('modal_evt'),50);
  console.log('??')
}
// 모달창 닫기
function closeModal(n){
  const modal = document.querySelector('.popup' + n);
  modal.classList.remove('show');
  modal.classList.remove('modal_evt');
  console.log('??')
}