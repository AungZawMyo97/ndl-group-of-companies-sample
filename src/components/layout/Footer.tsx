export function Footer() {
  return (
    <footer className="bg-inverse-surface border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-10 max-w-[1280px] mx-auto gap-6 py-8">
        <div className="flex flex-col gap-3">
          <div className="font-headline text-lg font-semibold text-inverse-on-surface">
            NDL Group
          </div>
          <div className="font-body text-sm text-surface-variant">
            © {new Date().getFullYear()} NDL Group Holdings. All rights reserved.
          </div>
          <div className="hidden md:flex gap-4 mt-1">
            <button className="text-surface-variant hover:text-inverse-on-surface transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </button>
            <button className="text-surface-variant hover:text-inverse-on-surface transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 w-full md:w-auto">
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:flex-wrap md:justify-center md:gap-6">
            <a className="font-body text-sm text-surface-variant hover:text-inverse-on-surface underline transition-all" href="#">
              Privacy Policy
            </a>
            <a className="font-body text-sm text-surface-variant hover:text-inverse-on-surface underline transition-all" href="#">
              Terms of Service
            </a>
            <a className="font-body text-sm text-surface-variant hover:text-inverse-on-surface underline transition-all" href="#">
              Compliance
            </a>
            <a className="font-body text-sm text-surface-variant hover:text-inverse-on-surface underline transition-all" href="#">
              Sitemap
            </a>
            <a className="font-body text-sm text-surface-variant hover:text-inverse-on-surface underline transition-all" href="#">
              Whistleblower Portal
            </a>
          </nav>
          <div className="flex md:hidden gap-4">
            <button className="text-surface-variant hover:text-inverse-on-surface transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </button>
            <button className="text-surface-variant hover:text-inverse-on-surface transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
