const ultimateDatail1 = document.getElementById("ultimate-detail1");
const button = document.getElementById("ultimate-title");

const ultmemo1 =
  "アルティメットとは、ディスク(いわゆるフリスビー)を、落とさないように味方とパスして反対側のエンドゾーンまで運んでエンドゾーン内でディスクをキャッチすれば得点できる、７人制スポーツです。その得点を相手チームと競います。気になる人は↓のリンクをクリック！！";

button.onclick = function () {
  ultimateDatail1.textContent = ultmemo1;
};

const cafeDetail = document.getElementById("cafe-detail1");
const button2 = document.getElementById("cafe-title");

const cafememo =
  "食べることが大好きで、定食屋、おしゃれなカフェ、居酒屋などを巡るのが大好きです。実は、つくばにはおしゃれなカフェがたくさんあるのです！！これは、つくばのお店で食べたバスクチーズケーキ！！おしゃれでしょ？？気になる人は、↓のリンクをクリック！お店のインスタにとびます！";

button2.onclick = function () {
  cafeDetail.textContent = cafememo;
};
