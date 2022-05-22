export default function PlainTitle ({ content }) {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto mt-24 py-16 px-8 w-full">
        <h1 className="font-semibold font-display tracking-widest text-5xl text-center uppercase">
          {content}
        </h1>
      </div>
    </div>
  )
}