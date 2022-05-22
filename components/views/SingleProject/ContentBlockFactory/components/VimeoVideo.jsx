export default function VimeoVideo ({ content }) {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-8 px-8 w-full">
        <div className="aspect-[16/9]">
          <iframe
            src={content}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>
    </div>
  )
}