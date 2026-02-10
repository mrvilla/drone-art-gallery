import { useState } from 'react';
import { Play, Mail, Phone, MapPin, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from './data/gallery';
import { highlights } from './data/highlights';

function App() {
  // Gallery modal/lightbox state
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  // Video highlight modal state
  const [selectedVideo, setSelectedVideo] = useState<typeof highlights[0] | null>(null);

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % galleryImages.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleVideoPlay = (video: typeof highlights[0]) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
        <div className="absolute inset-0 bg-[url('/expo-cover.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-85"></div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="flex items-center justify-center mb-6">
          <img 
            src="/flywithme.svg" 
            alt="Fly With Evilla Logo" 
            className="w-10 h-10 text-emerald-400" 
          />
          </div>
          <h1 className="font-light text-6xl md:text-8xl tracking-wider mb-6 animate-fade-in">
            The Ürban Art
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-4 text-gray-300">
            25 artists. 4 days. One space transformed.
          </p>
          <p className="text-lg md:text-xl font-light italic text-gray-400">
            Aerial and creative video coverage by Enrique
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4 text-center">Highlights</h2>
          <div className="w-24 h-0.5 bg-white mb-16 mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 place-items-center md:[&>*:only-child]:col-start-2">
            {highlights.map((item) => (
              <div key={item.id} className="group">
                <div
                  className="relative aspect-video bg-zinc-900 rounded-sm overflow-hidden mb-4 cursor-pointer"
                  onClick={() => handleVideoPlay(item)}
                  role="button"
                  aria-label={`Play video: ${item.title}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault(); handleVideoPlay(item);
                    }
                  }}
                >
                  <img
                    src={item.coverSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stills Gallery Section */}
      <section id="photos" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Stills from the Haus Der Visionäre</h2>
          <div className="w-24 h-0.5 bg-white mb-6"></div>
          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl leading-relaxed">
            Moments captured between Art works.<br />
            Textures, architecture, and composition — from a new perspective.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} onClick={() => setSelectedPhoto(idx)} className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 aspect-square rounded-lg overflow-hidden bg-zinc-800 cursor-pointer group"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4">About the Work</h2>
          <div className="w-24 h-0.5 bg-white mb-12"></div>

          <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-300">
            <p>
              My name is Enrique. I capture events and spaces in a way that feels <span className="text-white font-normal">elevated, intimate, and cinematic</span>. This project documents not just the art, but the energy and rhythm of <span className="text-white font-normal">The Ürban Art</span> at Haus der Visionäre.
            </p>
            <p>
              Certified and insured for professional aerial and creative video work across Berlin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-black border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Let's Collaborate</h2>
          <div className="w-24 h-0.5 bg-white mb-12"></div>

          <p className="text-xl font-light text-gray-300 mb-12 leading-relaxed">
            Available for cultural projects, galleries, and event organizers.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <a href="mailto:enrique@email.com" className="group flex items-center gap-4 p-6 border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all duration-300 hover:bg-zinc-900/30">
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-full group-hover:border-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="text-lg font-light">fly@iammrvilla.com</div>
              </div>
            </a>

            <a href="tel:+49123456789" className="group flex items-center gap-4 p-6 border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all duration-300 hover:bg-zinc-900/30">
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-full group-hover:border-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Phone</div>
                <div className="text-lg font-light">+49 170 151 8404</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 border border-zinc-800 rounded-sm">
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Location</div>
                <div className="text-lg font-light">Berlin</div>
              </div>
            </div>

            <a href="#" className="group flex items-center gap-4 p-6 border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all duration-300 hover:bg-zinc-900/30">
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-full group-hover:border-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Portfolio</div>
                <div className="text-lg font-light">View Instagram</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-light italic tracking-wide">
            Visual documentation with a sense of motion.
          </p>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
            title="Close Photo"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            title="Previous Photo"
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            title="Next Photo"
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={galleryImages[selectedPhoto].src}
            alt={`Aerial view ${selectedPhoto + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            {selectedPhoto + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(null);
            }}
            title="Close Video"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Header */}
              <div className="p-6 border-b border-zinc-700">
                <h3 className="text-2xl font-medium text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-zinc-400">{selectedVideo.description}</p>
              </div>
              
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <video
                  src={selectedVideo.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video Footer */}
              <div className="p-4 bg-zinc-800/50 text-center">
                <p className="text-zinc-400 text-sm">
                  Duration: {selectedVideo.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
