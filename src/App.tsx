export default function App() {
  return (
    <main className="bg-white dark:bg-gray-800 h-full flex flex-column items-center justify-center">
      <div className=" rounded-md">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-500">
              Hi I am Mark Haasjes
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-purple-500 sm:text-xl/8">
              I am a Front-end Developer at NOS, the Dutch Broadcast Foundation
              based in Hilversum, The Netherlands. I love to build web
              applications with JavaScript. I build these with frameworks,
              libraries and tools like; React, Vue, Redux, D3.js, GraphQL,
              Apollo, Docker, Jest, Codeship and more.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
