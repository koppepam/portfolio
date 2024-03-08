export default function Skills() {
  return (
    <>
      <div className="lg:w-3/4 mx-5 text-left grid grid-cols-2">
        <p className="text-3xl font-bold">Skills</p>
        <div className="">
          <p className="text-lg font-semibold">Environments</p>
          <ul className="">
            <li>MacOS</li>
            <li>Windows</li>
            <li>Docker</li>
            <li>Node.js</li>
            <li>Linux (ubuntu)</li>
          </ul>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Languages</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>PHP
              <p>→WordPressで触れたことがある程度</p>
            </li>
            <li>Java
              <p>→勉強中</p>
            </li>
            <li>Markdown</li>
          </ul>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Frameworks / Libraries</p>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>Prisma</li>
            <li>Webpack</li>
            <li>BootStrap</li>
            <li>TainwindCSS</li>
          </ul>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Tools</p>
          <ul>
            <li>VSCode</li>
            <li>Git, GitHub</li>
            <li>Google Workspace</li>
            <li>LINE Developers
              <p>→LINE botやLINEログインに使用</p>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <p className="text-lg font-semibold">Others</p>
          <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>WordPress</li>
            <li>Adobe Photoshop/XD
              <p>→学校で触れた程度</p>
            </li>
            <li>Google Apps Script</li>
          </ul>
        </div>
      </div>
    </>
  );
}