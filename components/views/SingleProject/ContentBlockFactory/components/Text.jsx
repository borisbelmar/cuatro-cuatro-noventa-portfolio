export default function Text ({ content }) {
  const safeContent = Array.isArray(content) ? content : [content]
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-8 px-8 w-full">
        {safeContent.map((item, index) => (
          <p key={index} className="text-lg md:text-xl mb-4 text-justify">
            {String(item)}
          </p>
        ))}
      </div>
    </div>
  )
}