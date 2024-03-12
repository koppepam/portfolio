export default function AboutMe() {
  const css = {fontSize: "1.5rem"};
  return (
    <div className="lg:w-1/2">
      <h2 className="text-lg">ヨネヤマ リセ</h2>
      <div className="flex items-strech my-3 space-x-2">
        <a href="https://github.com/koppepam" target="_blank" rel="noopener noreferrer"><img src="/images/github-icon.svg" alt="GitHub" className="size-10"/></a>
        <a href="https://qiita.com/koppepam" target="_blank" rel="noopener noreferrer"><img src="/images/favicon.png" alt="Qiita" className="size-10"/></a>
      </div>
      <p><i className="bi bi-geo-alt-fill" style={css}></i>新潟県→東京都</p>
      {/* <a href="/contact" target="_blank" rel="noopener noreferrer"><i className="bi bi-send" style={css}></i>お問い合わせ</a> */}
    </div>
  );
}