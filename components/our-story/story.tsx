export default function Story() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl">
            <h2 className="text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 md:text-xl leading-relaxed">
              Discover the journey that shaped our educational community and the
              values that guide us forward.
            </p>
          </div>

          {/* Video Container */}
          <div className="w-full ">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100">
              <iframe
                width="560"
                height="615"
                src="https://www.youtube.com/embed/Y9Znc-lackI?si=aEUKhtvrR3oDeRXK"
                title="YouTube video player"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/Y9Znc-lackI"
                title="Our Story - School Video"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
