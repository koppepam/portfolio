export default function Contact() {
  return (
    <main>
      <h1>お問い合わせフォーム</h1>
      <div>
          <form id="contactForm" action="">
            <div>
              <textarea name="name" id="name" rows={1} placeholder="お名前を入力してください"></textarea>
              <input id="name" type="text"></input>
            </div>
            <div>
              <textarea name="adress" id="adress" rows={1} placeholder="メールアドレスを入力してください"></textarea>
              <input id="adress" type="text"></input>
            </div>
            <div>
              <textarea name="content" id="content" rows={10} placeholder="お問い合わせ内容を入力してください"></textarea>
              <input id="content" type="text"></input>
            </div>
            <button type="submit">送信する</button>
          </form>
        </div>
    </main>
  );
}