export const Footer = () => {
  return (
    <footer className="relative text-black py-12">
      <div className="absolute inset-0 retro-scanlines" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-wider text-white">
              JoinMi Tour<span className="not-italic ml-1">✦</span>
            </span>
          </div>
          <p className="max-w-md font-body text-sm">
            Discover the sound of your city. Find events and never miss a beat.
          </p>
          <p className="font-body text-xs">
            © 2026 JoinMi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
