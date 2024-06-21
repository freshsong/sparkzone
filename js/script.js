
    /* 상단 navbar 토글 */
    window.onload = function(){
      let navList = document.querySelectorAll(".nav > ul > li");
      navList.forEach(function(navItem){
          navItem.addEventListener("mouseover", function(){
              this.querySelector(".submenu").style.height = "200px";
          });
      });
      navList.forEach(function(navItem){
          navItem.addEventListener("mouseout", function(){
              this.querySelector(".submenu").style.height = "0px";
          });
      });
  }
  /* index 페이지 퀵메뉴 위버튼 클릭 상단 이동 (.txtwrap 주석-Top이동시 글자색 변경되서 이후 수정)*/
  $( document ).ready( function() {
    /*
    $( window ).scroll( function() {
      if ( $( this ).scrollTop() > 400 ) {
        //$( '.txtwrap' ).fadeIn();
      } else {
       // $( '.txtwrap' ).fadeOut();
      }
    } );*/
    $( '.txtwrap' ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
      return false;
    } );
  } );

    /*메인창 팝업 */
    function closePopup() {
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        alert('마우스 오른쪽 클릭이 금지되어 있습니다!');
    });


  /* 메인페이지 이미지 슬라이드 */
  $(function(){
      $('.main1_slider').slick({
          //slide: 'img',		//슬라이드 되어야 할 태그 ex) div, li 
          infinite : true, 	//무한 반복 옵션	 
          slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
          slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
          speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
          adaptiveHeight: true,
          pager: true, //현재 위치 페이징 표시 여부 설정 
          arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
          dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
          autoplay : true,			// 자동 스크롤 사용 여부
          autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
          fade: true,
          pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
          vertical : false,		// 세로 방향 슬라이드 옵션
          dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
          draggable : true, 	//드래그 가능 여부 
        /*
          responsive: [ // 반응형 웹 구현 옵션
              { breakpoint: 768, //화면 사이즈
                settings: { slidesToShow: 1} 
              },    
              { breakpoint: 848, 
                settings: { slidesToShow: 2} 
              }, 
              { breakpoint: 1400, 
                settings: { slidesToShow: 1} 
              }, 
              { breakpoint: 1600, 
                settings: { slidesToShow: 4} 
              }, 
          ]
          */
      });



  /* scroll animation 효과 */
  const $counters = $(".scroll_on");
  // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
  const exposurePercentage = 90; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
  const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)
  // 윈도우의 스크롤 이벤트를 모니터링합니다.
  $(window).on('scroll', function() {
      // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
      $counters.each(function() {
          const $el = $(this);
          // 요소의 위치 정보를 가져옵니다.
          const rect = $el[0].getBoundingClientRect();
          const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
          const contentHeight = rect.bottom - rect.top; // 요소의 높이
          
          // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
          if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
              $el.addClass('active');
          }
          // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
          if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
              $el.removeClass('active');
          }
      });
  }).scroll();
    })

    /* 페이지 다국어 번역 */
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'ko', 
        // google 번역에서 제공 숨김
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, 
        // 한국어, 영어, 일본어만 표출
        includedLanguages : 'ko,en,ja,zh-CN,zh-TW'},
        'google_translate_element');
  }


  

 /* main3 지역별 골프장 위치등 */
  $(document).ready(function(){
    // 초기에 active 클래스가 있는 탭의 컨텐츠를 보이도록 설정
    $(".main3_tab_contentA.active").show();

    // 각 탭을 클릭했을 때
    $(".main3_event_main li").click(function(){
        // 클릭한 탭의 인덱스를 가져옴
        var tabId = $(this).attr("value");

        // 모든 탭의 컨텐츠를 숨김
        $(".main3_tab_contentA").hide();

        // 클릭한 탭의 컨텐츠를 보이도록 설정
        $("#a" + tabId).show();

        // 모든 탭의 active 클래스를 제거
        $(".main3_event_main li").removeClass("active");

        // 클릭한 탭에 active 클래스 추가
        $(this).addClass("active");
    });
});

/* 메인창 스크롤 다운 클릭시 하단페이지로 일부 이동 */
function scrollDown() {
  window.scrollBy(0, window.innerHeight * 0.7); // 현재 창의 70% 만큼 스크롤
}
/* 헤더 스크롤시 상단 nav 고정 */
$(window).scroll(function(){
  let tops = $(window).scrollTop();
  if(tops > 0){
     $('#seheader').css({
        'position' : 'fixed',
        'top': 0,
        'zIndex' : 550 ,
        'width' : '100%'
     });
     $('#headerdown').css({
        'marginTop' : '0px'
     });
     $('.header_inner').css({
        'marginTop' : '0px'
     });
  }else{
     $('#seheader').css({
        'position' : 'relative',
        'top':0,
        'width' : '100%'
     });
     $('#headerdown').css({
        'marginTop' : '0'
     });
     $('.header_inner').css({
        'paddingTop' : '0'
     });
  }
});

/* 페이징 */
    /* event  */
    $(document).ready(function() {
      $('.thumb > img').each(function(){
          $(this).attr('alt', $(this).attr('alt').replace(/&nbsp;/gi,''));
      });
  });
  /* notice */
  document.querySelectorAll('.notice').forEach(notice => {
    notice.addEventListener('click', () => {
        const content = notice.nextElementSibling;
        content.style.display = content.style.display === 'table-row' ? 'none' : 'table-row';
    });
});


/* event - notice 하단 페이징 공통코드 */
  /* 페이지 앞뒤 */
  var currentPage = 1;
  var totalPages = 3;
  function goPage(pageNumber) {
      if (pageNumber < 1 || pageNumber > totalPages) return;
      // 모든 버튼에서 'active' 클래스 제거
      $('.paging .btn').removeClass('active');
      // 클릭된 버튼에 'active' 클래스 추가
      $('#page' + pageNumber).addClass('active');
      // 현재 페이지 업데이트
      currentPage = pageNumber;
      // 네비게이션 버튼 상태 업데이트
      updateNavButtons();
  }

  function updateNavButtons() {
      // 처음과 이전 버튼 활성화/비활성화
      if (currentPage === 1) {
          $('.btn.first, .btn.prev').prop('disabled', true);
      } else {
          $('.btn.first, .btn.prev').prop('disabled', false);
      }
      // 다음과 마지막 버튼 활성화/비활성화
      if (currentPage === totalPages) {
          $('.btn.next, .btn.last').prop('disabled', true);
      } else {
          $('.btn.next, .btn.last').prop('disabled', false);
      }
  }

  // 초기 상태
  goPage(currentPage);
  // 클릭 이벤트 핸들러
  $('.btn.first').click(function() {
      goPage(1);
  });
  $('.btn.prev').click(function() {
      goPage(currentPage - 1);
  });
  $('.btn.next').click(function() {
      goPage(currentPage + 1);
  });
  $('.btn.last').click(function() {
      goPage(totalPages);
  });
  $('.num-group .btn').click(function() {
      var pageNum = $(this).text();
      goPage(parseInt(pageNum));
  });

  /* reservation */
  document.addEventListener("DOMContentLoaded", function () {
    let currentYear, currentMonth;

    function createCalendar(id, year, month) {
        let elem = document.getElementById(id);
        let mon = month - 1;
        let d = new Date(year, mon);
        let today = new Date();
        let twoMonthsLater = new Date(today);
        twoMonthsLater.setMonth(today.getMonth() + 2);

        let table = `<h5 class="text-center">${year}.${(month < 10 ? '0' : '') + month}</h5>`;
        table += '<table><tr><th style="color: red;">SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th style="color:blue;">SAT</th></tr><tr>';

        for (let i = 0; i < getDay(d); i++) {
            table += '<td></td>';
        }
        while (d.getMonth() == mon) {
            let dateStr = d.toISOString().split('T')[0];
            if (d < today || d >= twoMonthsLater) { // 오늘 이전이거나 두 달 뒤 이후
                table += `<td class="past-date">${d.getDate()}</td>`;
            } else {
                table += `<td data-date="${dateStr}">${d.getDate()}</td>`;
            }
            if (getDay(d) % 7 == 6) {
                table += '</tr><tr>';
            }
            d.setDate(d.getDate() + 1);
        }
        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                table += '<td></td>';
            }
        }
        table += '</tr></table>';
        elem.innerHTML = table;

        // 오늘 이전이거나 두 달 뒤 이후인 경우 클릭 이벤트를 추가하지 않습니다.
        if (today <= twoMonthsLater) {
            elem.querySelectorAll('td[data-date]').forEach(td => {
                td.addEventListener('click', function () {
                    showScheduleSlots(this.dataset.date);
                });
            });
        }
    }

    function getDay(date) {
        let day = date.getDay();
        return (day == 0) ? 6 : day - 1;
    }function showScheduleSlots(date) {
        // Adjust date to match server date
        const adjustedDate = new Date(date);
        adjustedDate.setDate(adjustedDate.getDate() + 1);
        const adjustedDateStr = adjustedDate.toISOString().split('T')[0];
    
        const scheduleListElem = document.getElementById('scheduleList');
        scheduleListElem.innerHTML = `<div class="sche-tit">선택하신 라운딩 일자는 ${adjustedDateStr} 입니다. </div>`;
    
        // 여기에 저장된 정보를 불러오는 코드를 추가합니다.
        // 예제 데이터 (날짜별로 저장된 정보)
        const data = {
            "2024-06-15": [
                { time: '시간 : 00:00 - 02:00', course: '코스 : A코스', cost: '총 금액 : 170,000원' },
                { time: '시간 : 08:00 - 12:00', course: '코스 : B코스', cost: '총 금액 : 100,000원' },
                { time: '시간 : 14:00 - 16:00', course: '코스 : D코스', cost: '총 금액 : 250,000원'  }
            ],
            "2024-06-25": [
                { time: '시간 : 08:00 - 10:00', course: '코스 : A코스', cost: '총 금액 : 110,000원'  },
                { time: '시간 : 13:00 - 15:00', course: '코스 : D코스', cost: '총 금액 : 180,000원'  },
                { time: '시간 : 16:00 - 18:00', course: '코스 : E코스', cost: '총 금액 : 220,000원'  }
            ],
            "2024-06-30": [
                { time: '시간 : 00:00 - 02:00', course: '코스 : A코스', cost: '총 금액 : 170,000원'  },
                { time: '시간 : 00:00 - 02:00', course: '코스 : A코스', cost: '총 금액 : 170,000원'  },
                { time: '시간 : 00:00 - 02:00', course: '코스 : A코스', cost: '총 금액 : 170,000원'  }
            ]
        };
    
        // 클릭한 날짜에 해당하는 정보를 불러와서 화면에 추가합니다.
        const schedules = data[adjustedDateStr] || [];
        schedules.forEach(schedule => {
            const scheduleItem = document.createElement('div');
            scheduleItem.className = 'schedule-item';
            scheduleItem.innerHTML = `<div class="sche-item">
                <span>${schedule.time}</span>
                <span>${schedule.course}</span>
                <span>${schedule.cost}</span>
                <button onclick="showLoginModal()">예약하기</button>
            </div>`;
            scheduleItem.addEventListener('click', showLoginModal);
            scheduleListElem.appendChild(scheduleItem);
        });
    }
    function showLoginModal() {
        const modal = document.getElementById('loginModal');
        const closeModal = document.querySelector('.close');

        modal.style.display = 'block';

        closeModal.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }

    function loadCalendar(year, month) {
        createCalendar("calendar1", year, month);

        let nextMonth = month + 1;
        let nextMonthYear = year;
        if (nextMonth > 12) {
            nextMonth = 1;
            nextMonthYear += 1;
        }

        createCalendar("calendar2", nextMonthYear, nextMonth);
    }

    let today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth() + 1;

    loadCalendar(currentYear, currentMonth);

    document.getElementById('nextMonth').addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }
        loadCalendar(currentYear, currentMonth);
    });

    document.getElementById('prevMonth').addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
        }
        loadCalendar(currentYear, currentMonth);
    });
});
