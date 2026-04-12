export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4">7SIDE</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Amsterdam-based streetwear
              <br />
              by Hayabusa
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#collection" className="text-zinc-500 hover:text-white text-sm transition-colors">
                Collection
              </a>
              <a href="#lookbook" className="text-zinc-500 hover:text-white text-sm transition-colors">
                Lookbook
              </a>
              <a href="#about" className="text-zinc-500 hover:text-white text-sm transition-colors">
                About
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
              Follow
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
                Instagram
              </a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} 7SIDE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
