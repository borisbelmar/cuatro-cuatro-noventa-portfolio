export default function KeyValueList ({ content }) {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-8 px-8 w-full">
        <h3 className="text-lg md:text-2xl mb-4 font-bold">{content.title}</h3>
        <ul className="mb-3">
          {content.list.map((item, index) => (
            <li key={index} className="text-base md:text-xl mb-2">
              <span className="font-semibold">{item.label}</span>: {String(item.value)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}