export default function MultiPortraitVideo ({ content }) {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-8 px-8 w-full flex flex-col sm:flex-row gap-2">
        {content.map(item => (
          <div key={item} className="aspect-[9/16] flex-1">
            <iframe
              src={item}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
            />
          </div>
        ))}
      </div>
    </div>
  )
}