$(function(){
  // Swiperの設定
    let mySwiper = new Swiper ('.swiper-container', {
        // 以下にオプションを設定
        autoplay: {
            delay: 3000,
        },
        loop: true, //最後に達したら先頭に戻る

        //ページネーション表示の設定
        pagination: { 
          el: '.swiper-pagination', //ページネーションの要素
          type: 'bullets', //ページネーションの種類
          clickable: true, //クリックに反応させる
        },

        //ナビゲーションボタン（矢印）表示の設定
        navigation: { 
          nextEl: '.swiper-button-next', //「次へボタン」要素の指定
          prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
        },
    })

  // ハンバーガーメニューの設定
  $('.js-c-hamburger').on('click', function(){
    hamburger();
  });

  // スクロールイベントでヘッダーを表示
  $(window).scroll(function() {
    // トップ部分からのスクロール距離を、変数scrollに代入
    let scroll = $(window).scrollTop();
    // スクロール距離が50px以上になったときに、ヘッダー背景をフェードイン
    if(scroll > 50) {
        $('.l-header-background-color').fadeIn(500);
    } else {
        $('.l-header-background-color').fadeOut(500);
        }
    // 画面下から#galleryまでの距離を取得
    let service_position = $('.l-service').offset().top - $(window).height();
    // サービス部分が表示されたらになったときに、トップボタンをフェードイン
    if(scroll > service_position) {
        $('.c-top-button').fadeIn(500);
    } else {
        $('.c-top-button').fadeOut(500);
        }
  });

    // スムーススクロール（このままコピペ可能）
    // ページ内リンクのスムーススクロール
    $('a[href^="#"]').click(function(){
      // 値を取得することで再代入されることがあるのでconstではなくletを使う
      // a要素のherf属性（リンク先）をattrで取得、変数hrefにセット
      let href = $(this).attr("href");
      // ジャンプ先のidを変数targetにセット
      let target = $(href == "#" || href =="" ? 'html' : href);
      // トップからジャンプ先の要素までの距離を取得
      let position =target.offset().top;
      // animeteでスムーススクロールを行う
      // 600はスクロール速度を表し、単位はミリ秒
      // animateメソッドは、CSSプロパティを{}とキャメルケースで表記
      // {scrollTop:position}はトップからのスクロール量が変数positionまでになる
      $("html, body").animate({scrollTop:position},600,"swing")
      return false;
  });


  // 共通処理まとめ
  // ハンバーガーメニューの処理
  function hamburger() {
    $('.js-c-hamburger').toggleClass('active');
        if($('.js-c-hamburger').hasClass('active')){
            $('.js-p-menu-modal').addClass('active');
        } else {
            $('.js-p-menu-modal').removeClass('active');
        }
  }
});
