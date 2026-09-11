export default function SectionHeading({ eyebrow, title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-indigo-400 text-sm font-mono font-medium mb-3 tracking-wider">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 dark:text-slate-100 text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
