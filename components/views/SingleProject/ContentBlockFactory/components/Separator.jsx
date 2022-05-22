import clsx from "clsx"

export default function Separator({ className }) {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-8 w-full">
      <hr
        className={clsx(
          "border-gray-400 w-10/12 mx-auto",
          className
        )}
      />
    </div>
  );
}