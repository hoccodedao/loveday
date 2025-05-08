$(function () {
  var ngayhenho = "19-03-2025"; // dd-mm-yyyy

  const loichuc = [
    "Chúc mừng 50 ngày hạnh phúc cùng nhau! ❤️",
    "100 ngày yêu nhau thật ngọt ngào! 🥰",
    "Tròn 1 năm bên nhau rồi đó! 💖",
    "2 năm tuyệt vời cùng nhau! Mãi bên nhau nhé! 💞",
    "Mỗi ngày bên em là một món quà! 🎁"
  ];

  const mocDacBiet = [50, 100, 365, 730];

  function hienLoiChucRandom(text) {
    const loiChuc = loichuc[Math.floor(Math.random() * loichuc.length)];
    const popup = `
      <div class="popup_notify_out display-block" style="display:none;">
        <div class="popup_notify">
          <span class="close-popup" style="cursor:pointer;position:absolute;top:10px;right:20px;font-size:20px;">×</span>
          <p style="font-size:20px;padding:20px;text-align:center;">${text}<br><strong>${loiChuc}</strong></p>
        </div>
      </div>
    `;
    $('body').append(popup);
    $('.popup_notify_out').fadeIn();
    $('.close-popup').click(function () {
      $('.popup_notify_out').fadeOut().remove();
    });
  }

  function updateTime() {
      let [day, month, year] = ngayhenho.split("-");
      let targetDate = new Date(`${year}-${month}-${day}T00:00:00`);
      let now = new Date();
      let diff = now - targetDate;

      if (diff < 0) diff = 0;

      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      $("#wus-ngay").text(days);
      $("#wus-gio").text(hours);
      $("#wus-phut").text(minutes);
      $("#wus-giay").text(seconds);

      // Kiểm tra ngày đặc biệt
      if (mocDacBiet.includes(days)) {
        if (!$('.popup_notify_out').length) {
          hienLoiChucRandom(`Hôm nay là ngày thứ <strong>${days}</strong> kể từ ngày hẹn hò!`);
        }
      }
  }

  setInterval(updateTime, 1000);
  updateTime(); // gọi lần đầu
});
// HIỂN THỊ NGÀY THÁNG NĂM  
$(function() {
    const backgrounds=['./public/src/img/bg.jpg',];
    function RandomBackground() {
        $('.bg-img').css('background-image', 'url(' + backgrounds[Math.floor(Math.random() * backgrounds.length)] + ')');
    }
    RandomBackground();
    setInterval(function () {
        RandomBackground();
    }, 999999);
});
var a_idx=0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
      var a=new Array("🐰", "🥕", "🐯");
      var $i=$("<span/>").text(a[a_idx]);
      a_idx=(a_idx + 1) % a.length;
      var x=e.pageX, y=e.pageY;
      $i.css({
        "z-index": 999,
        "top": y - 20,
        "left": x,
        "cursor": "default",
        "position": "absolute",
        "font-weight": "bold",
        "color": rand_color()
      });
      function rand_color() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
      }
      $("body").append($i);
      $i.animate({
        "top": y - 180,
        "opacity": 0
      }, 1500, function () {
        $i.remove();
      });
    });
});
// HIỂN THỊ THÔNG BÁO POPUP
$(function() {
    // var blur=$("#blur");
    $('.popup_notify_out').addClass('display-block');
    $('.close-popup').click(function () {
      $('.popup_notify_out').fadeOut();
      wussunplay();
      // blur.css('display', 'none');
    });
    $('.popup_notify_out.display-block').fadeIn(function () {
      //   blur.css('display', 'block');
      // $('body').addClass('blur');
    });
  });  
// NHẠC
const Wussun_Music=["b1.mp3","b2.mp3","b3.mp3","b4.mp3",];let index=Math.floor(Math.random()*Wussun_Music.length);const audio=new Audio(Wussun_Music[index]);function wussunplay(){audio.play()}document.addEventListener("click",wussunplay()),audio.addEventListener("ended",function(){index=(index+1)%Wussun_Music.length,audio.src=Wussun_Music[index],audio.play()});
console.log("%c mho mua thu ", "color:#fff;background:linear-gradient(270deg,#986fee,#8695e6,#68b7dd,#18d7d3);padding:8px 15px;border-radius:15px");
console.log("%c copyright - nho mua thu ", "color:#fff;background:#000;padding:8px 15px;border-radius:15px");