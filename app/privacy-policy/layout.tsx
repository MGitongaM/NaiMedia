export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 mt-20">
      <div className="prose prose-neutral mx-auto max-w-none prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 dark:prose-invert dark:prose-headings:text-white">
        {children}
      </div>
    </div>
  )
}
