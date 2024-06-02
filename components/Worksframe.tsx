'use client';

type Props = {
  image: string;
  title: string;
  worklink: string;
  codelink: string;
  children: React.ReactNode; // 説明とロゴ
}

export default function Worksframe(props: Props) {
  return (
    <div className="mx-5 my-3 group rounded-lg border px-5 py-4 transition-colors">
      {images(props)}
      {/* <img src={props.image} alt="サンプルイメージ" className="w-full h-50" /> */}
      <h2 className="my-3 text-2xl font-semibold">
        {props.title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt; {/* これは矢印 */}
        </span>
      </h2>
      {props.children}
      <span className="">{links(props)}</span>
    </div>
  );
}

const images = (props: Props) => {
  if (props.image != "") {
    return (
      <img src={props.image} alt="サンプルイメージ" className="w-full h-50" />
    );
  }
  return <></>
}

const links = (props: Props) => {
  if (props.worklink != "" && props.codelink != "") {
    return (
      <div className="m-5">
        <a href={props.worklink} target="_blank" rel="noopener noreferrer"
          className="rounded-full inline-block transition bg-sky-400 hover:scale-110 text-white p-3 mr-3">
          ページを開く
        </a>
        <a href={props.codelink} target="_blank" rel="noopener noreferrer"
          className="rounded-full inline-block transition bg-black hover:scale-110 text-white p-3">
          ソースコードを開く
        </a>
      </div>
    );
  } else if (props.worklink != "" && props.codelink == "") {
    return (
      <a href={props.worklink} target="_blank" rel="noopener noreferrer"
        className="rounded-full inline-block transition bg-sky-400 hover:scale-110 text-white p-3 m-5">
        ページを開く
      </a>
    );
  } else if (props.worklink == "" && props.codelink != "") {
    return (
      <a href={props.codelink} target="_blank" rel="noopener noreferrer"
        className="rounded-full inline-block transition bg-black hover:scale-110 text-white p-3 m-5">
        ソースコードを開く
      </a>
    );
  }
  return <></>
}