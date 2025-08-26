// app/photography/page.tsx
export default function PhotographyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Photography Page</h1>
      <p className="text-gray-600 max-w-prose text-center">
        This is placeholder content for the Photography page.  
        Replace this with real photos, galleries, or portfolio sections later.
      </p>
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Photo 1
        </div>
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Photo 2
        </div>
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Photo 3
        </div>
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Photo 4
        </div>
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Photo 5
        </div>
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          Photo 6
        </div>
      </div>
    </main>
  );
}
