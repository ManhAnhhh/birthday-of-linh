
var to = 'Click me!';
var gift_url = "";
var gift_image_url = './img/2.jpg';

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

(function init() {
  var _giftLink,
    _giftImg;

  if (!gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = '#';
    // _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    // presentImage.appendChild(_giftImg);
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener("click", function (e) {
    const jsItemCart = document.querySelector('.js-item');
    const jsTitle = document.querySelector(".js-title");
    const jsPyro = document.querySelector('.js-pyro');
    const jsTo = document.querySelector('.js-to');
    jsTo.classList.toggle("close");
    
    jsPyro.classList.toggle("open1");
    jsItemCart.classList.toggle("open1");
    jsTitle.classList.toggle("open1");
    present.classList.toggle("open");
    playMusic();
  }, false); 
  // false là bắt sự kiện nổi bọt,
  // có nghĩa là khi ta onclick đúng 
  // thẻ present thì sự kiện mới xảy ra
  // còn nếu k có false thì khi ta onclick ở phần
  // tử cha của present (nếu có) thì sự kiện này
  // vẫn xảy ra. Điều đó là k mong muốn
  // trong 1 số trường hợp
  nametag.innerText = to;
  nametag.style.paddingTop = "4px";
  nametag.style.fontSize = "15px";
})();

// init();

function playMusic(){
  var myAudio = document.getElementById('playAudio');
  if (myAudio.duration > 0 && !myAudio.paused) {
      //Its playing...do your job

  } else {
    myAudio.play()
    //Not playing...maybe paused, stopped or never played.

  }
}