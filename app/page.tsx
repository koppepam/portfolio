import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Works from "@/components/Works";


// 読み込みが終わるまでの間に表示する画面作る
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 pt-24">
      <h1 className="js-show-on-scroll text-5xl font-bold">Portfolio</h1>
      <div className="lg:flex w-full my-32 space-y-32 lg:space-y-0 text-center lg:text-left">
        <AboutMe />
        <Skills />
      </div>
      <Works />
    </main>
  );
}
