import MainLayout from "components/layout/MainLayout";
import Profile from "./Profile";

export default function About ({ content }) {
  return (
    <MainLayout>
      <div className="max-w-screen-lg mx-auto mt-32 py-16 px-8 w-full">
        <div className="text-center uppercase font-semibold text-3xl md:text-4xl font-display tracking-widest">
          <h1 className="mb-4">
            {content.title}
          </h1>
          <h2>
            {content.subtitle}
          </h2>
        </div>
        <div className="flex mt-28 gap-4 flex-col sm:flex-row">
          {content.profiles.map((profile, index) => (
            <Profile key={index} profile={profile} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}