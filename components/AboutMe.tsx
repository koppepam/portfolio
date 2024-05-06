export default function AboutMe() {
  const icon = {fontSize: "1.5rem", marginRight: "0.3rem"};
  const text = {fontSize: "1.2rem"};

  return (
    <div className="lg:w-1/2">
      <h2 className="text-xl">ヨネヤマ リセ</h2>
      <div className="flex items-strech my-3 space-x-2 place-content-center lg:place-content-start">
        <a href="https://github.com/koppepam" target="_blank" rel="noopener noreferrer"><img src="/images/github-icon.svg" alt="GitHub" className="size-10"/></a>
        <a href="https://qiita.com/koppepam" target="_blank" rel="noopener noreferrer"><img src="/images/favicon.png" alt="Qiita" className="size-10"/></a>
      </div>
      <p style={text}>学生</p>
      <p style={text}><i className="bi bi-geo-alt-fill" style={icon}></i>東京都</p>
      {/* <a href="/contact" target="_blank" rel="noopener noreferrer"><i className="bi bi-send" style={icon}></i>お問い合わせ</a> */}
      <p style={text}><i className="bi bi-balloon" style={icon}></i>2006/03/15</p>
      <ul className="mt-5" style={text}><i className="bi bi-journal-check" style={icon}></i>経歴
        <li style={text}>2024/03　株式会社Spookies アルバイト入社</li>
      </ul>
    </div>
  );
}