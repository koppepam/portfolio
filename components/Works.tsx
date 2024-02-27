import Worksframe from "./Worksframe";

export default function Works() {
  return (
    <>
      <p>Works</p>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Worksframe title="災害情報お知らせアプリ" image="" worklink="https://disaster-info-6cpa.onrender.com/" codelink="https://github.com/koppepam/disaster-info">
          <p className="m-0 max-w-[55ch] text-sm opacity-50">
          N予備校Webアプリケーションコンテスト2023冬　学園部門　優秀賞受賞<br/>災害情報をお知らせします。気象庁防災情報XMLフォーマットをもとに作成。LINEログイン機能・LINE bot付き。<br/>※データベースの無料期間終了に伴い、一部の機能を停止しました。
          </p>
        </Worksframe>

        <Worksframe title="お気に入り記録２" image="" worklink="" codelink="https://github.com/koppepam/favo-log2">
          <p className="m-0 max-w-[55ch] text-sm opacity-50">
            お気に入り記録１をExpressで再度作成しました。GitHubでログインができます。
          </p>
        </Worksframe>

        <Worksframe title="お気に入り記録１" image="" worklink="" codelink="https://github.com/koppepam/favo-log">
          <p className="m-0 max-w-[55ch] text-sm opacity-50">
            N予備校Webアプリケーションコンテスト2022冬　N・S高等学校部門　健闘賞受賞<br/>お気に入りを記録・共有できます。フレームワークは使用せずに作成しました。
          </p>
        </Worksframe>

        <Worksframe title="パーソナルカラー診断サイト" image="" worklink="https://koppepam.github.io/color/color.html" codelink="https://github.com/koppepam/color">
          <p className="m-0 max-w-[55ch] text-sm opacity-50">
            N予備校動くWebページコンテスト2022夏　N・S高等学校部門　健闘賞受賞<br/>質問に答えると自分のパーソナルカラーがわかります。GitHub Pagesで公開。正確な診断はできませんが、楽しんでいただければ幸いです。
          </p>
        </Worksframe>
      </div>
    </>
  );
}