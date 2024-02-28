import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Works from "@/components/Works";


// 読み込みが終わるまでの間に表示する画面作る
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 pt-24">
      <div className="">
        <h1 className="text-5xl font-bold">Portfolio</h1>
        <h2 className="text-lg">ヨネヤマ リセ</h2>
      </div>
      <AboutMe />
      <Skills />
      <Works />
    </main>
  );
}
