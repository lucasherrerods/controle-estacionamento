export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="p-4 mt-10 ">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/lucasherrerods"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-2xl"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24 shadow-sm">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.338.72-4.042-1.41-4.042-1.41-.548-1.395-1.335-1.762-1.335-1.762-1.095-.742.083-.727.083-.727 1.208.082 1.838 1.237 1.838 1.237 1.07 1.83 2.805 1.305 3.472.997.105-.772.42-1.305.765-1.605-2.662-.3-5.467-1.335-5.467-5.932 0-1.305.465-2.37 1.23-3.217-.128-.3-.532-1.522.112-3.165 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.397 3-.405 1.02.008 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.643.24 2.865.12 3.165.765.847 1.23 1.912 1.23 3.217 0 4.612-2.805 5.625-5.475 5.925.435.375.81 1.117.81 2.257 0 1.628-.015 2.94-.015 3.337 0 .322.225.682.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/lucasherrero"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-2xl"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-slate-600 font-semibold">
          &copy; {currentYear} • Contrle de Estacionamento v1.0
        </p>
      </div>
    </footer>
  )
}
