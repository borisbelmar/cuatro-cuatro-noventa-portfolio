import MainLayout from "components/layout/MainLayout";

export default function NotFound () {
  return (
    <MainLayout>
      <div className="flex-1 text-center w-full h-full flex justify-center items-center px-8">
        <h3 className="font-display tracking-widest font-semibold text-lg md:text-2xl">No encontramos lo que buscabas :C</h3>
      </div>
    </MainLayout>
  )
}