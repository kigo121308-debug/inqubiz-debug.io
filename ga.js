(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-21821655-4', 'auto');
ga('require', 'linkid', 'linkid.js'); //�g�������N�̃A�g���r���[�V�������͗p�̃^�O
ga('send', 'pageview');

//���h���C����PDF�ւ̃����N�̃N���b�N���C�x���g�Ƃ��Čv��
jQuery(function() {
  jQuery("a").click(function(e) {
    var ahref = jQuery(this).prop('href');
    if (ahref.indexOf("jfc.go.jp") != -1 && ahref.indexOf(".pdf") != -1) {
      ga('send', 'event', 'PDF', 'click', ahref, 1);
    }
  });
});

//�d�b�ԍ��ւ̃����N�ia�v�f�j�̃^�b�`�X�^�[�g���C�x���g�Ƃ��Čv��
jQuery(function() {
  jQuery("a").bind("touchstart", function(e) {
    var ahref = jQuery(this).prop('href'); //href�̃v���p�e�B�l��ahref�ɑ��
    if (ahref.indexOf("tel:") != -1) {
      var number = ahref.replace(/tel:/g, ''); //ahref����utel:�v���폜�����������number�ɑ��
      var number2 = number.replace(/-/g, ''); //number����u-�v���폜�����������number2�ɑ��
      ga('send', 'event', 'TEL', 'click', number2, 1);
    }
  });
});

// GA4�\��t���^�O URL��ǂݍ��ޗl�ɐ������ꂽ�^�O���ꕔ����
/*
�������ꂽ�^�O
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P0VXG7R2ZS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P0VXG7R2ZS');
</script>
*/

// SCRIPT�^�O�̐���
var el = document.createElement("script");
 
// SCRIPT�^�O��SRC�����ɓǂݍ��݂����t�@�C�����w��
el.src = "https://www.googletagmanager.com/gtag/js?id=G-P0VXG7R2ZS";
 
// HEAD�v�f�̍Ō�ɒǉ�
document.head.appendChild(el);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-P0VXG7R2ZS');

// GA4�����܂�
