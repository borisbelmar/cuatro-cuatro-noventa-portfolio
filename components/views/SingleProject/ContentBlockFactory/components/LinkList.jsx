export default function LinkList ({ content }) {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-8 px-8 w-full">
        <h3 className="text-lg md:text-2xl mb-4 font-bold">Enlaces</h3>
        <ul>
          {content.map((item, index) => (
            <li key={index} className="mb-4">
              <a
                className="text-lg md:text-xl underline hover:opacity-75 transition"
                href={item.url}
                rel="noreferrer"
                target={item.blank ? '_blank' : undefined}
              >
                {item.label || item.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}