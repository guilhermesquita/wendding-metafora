import content from "../[jsons]/content-header.json";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="flex gap-10">
        {content.map((content, index) => {
          return (
            <ul key={index}>
              <a
                href={content.directTo}
                className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {content.title}
              </a>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}
