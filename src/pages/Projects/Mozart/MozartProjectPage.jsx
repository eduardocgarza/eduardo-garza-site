import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  X,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import RootLayout from "../../../components/RootLayout";

function getFullSlidePath(slideNumber) {
  return `/mozart/full/slide-${slideNumber}.png`;
}

function getPreviewPath(photoPath) {
  return photoPath.replace("/full/", "/preview/").replace(".png", "-1.png");
}

function getSlideNumber(photoPath) {
  const match = photoPath.match(/slide-(\d+)\.png$/);
  return match ? Number(match[1]) : null;
}

function makeFullSlidePaths(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) =>
    getFullSlidePath(start + index),
  );
}

const MIN_ZOOM_LEVEL = 1;
const MAX_ZOOM_LEVEL = 2.5;
const MANUAL_ZOOM_STEP = 0.1;
const SLIDER_ZOOM_STEP = 0.05;
const WHEEL_ZOOM_STEP = 0.08;

function clampZoomLevel(zoomLevel) {
  const numericZoomLevel = Number(zoomLevel);

  if (Number.isNaN(numericZoomLevel)) {
    return MIN_ZOOM_LEVEL;
  }

  return Math.min(MAX_ZOOM_LEVEL, Math.max(MIN_ZOOM_LEVEL, numericZoomLevel));
}

function MozartGallerySection({ name, onSelectPhoto, photoPaths }) {
  return (
    <section aria-label={name} className="my-8">
      <h2 className="sr-only">{name}</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {photoPaths.map((photoPath) => (
          <MozartGalleryPhoto
            key={photoPath}
            onSelectPhoto={onSelectPhoto}
            photoPath={photoPath}
            photoPaths={photoPaths}
          />
        ))}
      </div>
    </section>
  );
}

function MozartGalleryPhoto({ onSelectPhoto, photoPath, photoPaths }) {
  const slideNumber = getSlideNumber(photoPath);

  return (
    <button
      aria-label={
        slideNumber ? `Open Mozart photo ${slideNumber}` : "Open Mozart photo"
      }
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
      onClick={() => onSelectPhoto(photoPath, photoPaths)}
      type="button"
    >
      <img
        alt="Mozart project"
        className="h-full w-full object-cover"
        loading="lazy"
        src={getPreviewPath(photoPath)}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/5 transition duration-200 hover:bg-black/10"
      ></span>
    </button>
  );
}

function MozartSectionHeaderPhoto({ photoPath }) {
  return (
    <div className="w-full flex justify-center">
      <img
        alt="Mozart project"
        className="block h-auto w-[400px]"
        loading="lazy"
        src={photoPath}
      />
    </div>
  );
}

function MozartParagraphSection({ children, name }) {
  return (
    <section
      aria-label={name}
      className="my-10 space-y-4 text-[15px] leading-7 text-gray-700"
    >
      <h2 className="sr-only">{name}</h2>
      {children}
    </section>
  );
}

export default function MozartProjectPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(MIN_ZOOM_LEVEL);
  const selectedPhotoPath = selectedPhoto?.photoPath;
  const selectedPhotoPaths = selectedPhoto?.photoPaths ?? [];
  const selectedRowHasMultiplePhotos = selectedPhotoPaths.length > 1;
  const canZoomIn = zoomLevel < MAX_ZOOM_LEVEL;
  const canZoomOut = zoomLevel > MIN_ZOOM_LEVEL;

  const openPhoto = useCallback((photoPath, photoPaths) => {
    setSelectedPhoto({ photoPath, photoPaths });
  }, []);

  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const goToRelativeSlide = useCallback((direction) => {
    setSelectedPhoto((currentPhoto) => {
      if (!currentPhoto) return currentPhoto;

      const currentIndex = currentPhoto.photoPaths.indexOf(
        currentPhoto.photoPath,
      );

      if (currentIndex === -1) return currentPhoto;

      const nextIndex =
        (currentIndex + direction + currentPhoto.photoPaths.length) %
        currentPhoto.photoPaths.length;

      return {
        photoPath: currentPhoto.photoPaths[nextIndex],
        photoPaths: currentPhoto.photoPaths,
      };
    });
  }, []);

  const setResolvedZoomLevel = useCallback((nextZoomLevel) => {
    setZoomLevel((currentZoomLevel) => {
      const resolvedZoomLevel =
        typeof nextZoomLevel === "function"
          ? nextZoomLevel(currentZoomLevel)
          : nextZoomLevel;

      return clampZoomLevel(resolvedZoomLevel);
    });
  }, []);

  const zoomIn = useCallback(() => {
    setResolvedZoomLevel(
      (currentZoomLevel) => currentZoomLevel + MANUAL_ZOOM_STEP,
    );
  }, [setResolvedZoomLevel]);

  const zoomOut = useCallback(() => {
    setResolvedZoomLevel(
      (currentZoomLevel) => currentZoomLevel - MANUAL_ZOOM_STEP,
    );
  }, [setResolvedZoomLevel]);

  useEffect(() => {
    setZoomLevel(MIN_ZOOM_LEVEL);
  }, [selectedPhotoPath]);

  const handleImageWheel = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      setResolvedZoomLevel((currentZoomLevel) => {
        if (event.deltaY < 0) {
          return currentZoomLevel + WHEEL_ZOOM_STEP;
        }

        return currentZoomLevel - WHEEL_ZOOM_STEP;
      });
    },
    [setResolvedZoomLevel],
  );

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        goToRelativeSlide(-1);
      }

      if (event.key === "ArrowRight") {
        goToRelativeSlide(1);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, goToRelativeSlide, selectedPhoto]);

  return (
    <RootLayout>
      <article className="mt-10 mb-16">
        <Link
          to="/projects"
          className="inline-flex text-sm text-gray-600 hover:text-gray-950 hover:underline"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          <span className="ml-2">Back to projects</span>
        </Link>

        <header className="mt-8 mb-10">
          <p className="mb-2 text-xs font-medium uppercase text-gray-500">
            COMPANY STORY
          </p>
          <h1 className="font-libreBaskerville text-[36px] leading-tight text-gray-950">
            Mozart
          </h1>
        </header>

        <MozartGallerySection
          name="Opening Design Views"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(1, 3)}
        />

        <MozartParagraphSection name="Opening Notes">
          <p>
            This is the story about how one-time, I built a piano and dreamt of
            changing the world … or at least, changing the musical instruments
            landscape.
          </p>
          <p>
            Like the vast majority of young people in technology today, I grew
            up with great entrepreneurial giants to look up to - Steve Jobs &
            Steve Wozniak, the Google guys, and all the great people that went
            on to create many of the platforms and apps that we use today.
            Definitely less present now in the culture zeitgeist, the early
            2000s truly felt like a powerfully energetic renaissance where the
            coder geek in his dorm room could build something truly great and
            change the world. Beyond the myth of the story, we saw many cases
            that produced these Alexander the Great-like characters - that could
            slay every dragon, bring a collective set of people together from
            unique and diverse backgrounds, and build these outstanding
            companies. It was captivating to witness - and provided no obstacle
            for anyone else who wanted to get in the ring and give it a shot.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Early Product Angles"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(4, 8)}
        />

        <MozartParagraphSection name="Early Product Notes">
          <p>
            Write about the first product direction here. This section can
            describe what the early photos are meant to show and why those
            decisions mattered.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Interface Exploration"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(9, 14)}
        />

        <MozartParagraphSection name="Interface Notes">
          <p>
            Write about the interface exploration here. This paragraph can cover
            the screen experience, the teaching flow, or the assumptions that
            changed while testing.
          </p>
          <p>
            Use this paragraph for any details about interaction design, visual
            hierarchy, or the way the software needed to support playing music
            in real time.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Prototype Details"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(15, 21)}
        />

        <MozartParagraphSection name="Prototype Notes">
          <p>
            Write about the prototype details here. This can be where you
            explain the work behind turning the concept into a physical
            instrument.
          </p>
          <p>
            Use this second paragraph for what broke, what improved, or what you
            learned from the first assembled version.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Keyboard Close-Ups"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(22, 23)}
        />

        <MozartParagraphSection name="Keyboard Notes">
          <p>
            Write about the keyboard and playing surface here. This can explain
            how the tactile experience, electronics, and enclosure had to come
            together.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Control Surface Notes"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(24, 25)}
        />

        <MozartParagraphSection name="Controls Notes">
          <p>
            Write about the control surface here. This section can cover the
            decisions around access, clarity, and what needed to be available
            during a lesson or performance.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Cabinet Form Study"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(26, 30)}
        />

        <MozartParagraphSection name="Cabinet Notes">
          <p>
            Write about the cabinet and physical form here. This can include
            industrial design, dimensions, materials, or the balance between a
            furniture object and an electronic product.
          </p>
          <p>
            Add manufacturing or sourcing context here if this section needs a
            second paragraph before the next photo row.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Assembly and Fit"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(31, 37)}
        />

        <MozartParagraphSection name="Assembly Notes">
          <p>
            Write about assembly and fit here. This can describe how parts came
            together, what tolerances mattered, and which decisions were driven
            by manufacturability.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Display Interaction"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(38, 41)}
        />

        <MozartParagraphSection name="Display Notes">
          <p>
            Write about the display interaction here. This can explain how the
            touch interface connected to the piano experience and what the
            screen needed to communicate at a glance.
          </p>
          <p>
            Use this paragraph for any notes about visual feedback, lesson
            timing, or the relationship between the display and the keys.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Hardware Build"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(42, 53)}
        />

        <MozartParagraphSection name="Hardware Notes">
          <p>
            Write about the hardware build here. This can include boards,
            wiring, suppliers, testing, and the practical problems of making the
            electronics reliable.
          </p>
          <p>
            Add a second hardware paragraph here for tradeoffs, revisions, or
            the details that made the product difficult to build well.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Instrument Profile"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(54, 57)}
        />

        <MozartParagraphSection name="Profile Notes">
          <p>
            Write about the instrument profile here. This section can explain
            the final silhouette, proportions, or how the product was meant to
            sit in a room.
          </p>
        </MozartParagraphSection>

        <MozartSectionHeaderPhoto photoPath={getFullSlidePath(58)} />

        <MozartGallerySection
          name="Materials and Finish"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(59, 61)}
        />

        <MozartParagraphSection name="Materials Notes">
          <p>
            Write about materials and finish here. This can include the surface
            finish, color choices, durability concerns, and any factory
            constraints.
          </p>
        </MozartParagraphSection>

        <MozartSectionHeaderPhoto photoPath={getFullSlidePath(62)} />

        <MozartGallerySection
          name="Music Library Screens"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(63, 64)}
        />

        <MozartParagraphSection name="Library Notes">
          <p>
            Write about the music library here. This can cover song selection,
            browsing, search, lesson organization, or how the software made the
            piano approachable.
          </p>
          <p>
            Use this paragraph for notes about content structure, playback, MIDI
            behavior, or anything that connects the library to learning.
          </p>
        </MozartParagraphSection>

        <MozartSectionHeaderPhoto photoPath={getFullSlidePath(65)} />

        <MozartGallerySection
          name="Lesson Flow"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(66, 67)}
        />

        <MozartParagraphSection name="Lesson Notes">
          <p>
            Write about the lesson flow here. This can explain how a user
            starts, follows along, gets feedback, and moves from practice into
            playing.
          </p>
        </MozartParagraphSection>

        <MozartSectionHeaderPhoto photoPath={getFullSlidePath(68)} />

        <MozartGallerySection
          name="Practice Mode"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(69, 71)}
        />

        <MozartParagraphSection name="Practice Notes">
          <p>
            Write about practice mode here. This can cover repetition, tempo,
            mistakes, progression, or the decisions behind helping someone
            improve without friction.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Companion App"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(72, 79)}
        />

        <MozartParagraphSection name="App Notes">
          <p>
            Write about the companion app here. This can describe what belonged
            on the phone, what belonged on the piano, and how those surfaces
            worked together.
          </p>
          <p>
            Add any account, social, or remote-control context here if it
            belongs before the manufacturing photos.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Manufacturing Process"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(80, 95)}
        />

        <MozartParagraphSection name="Manufacturing Notes">
          <p>
            Write about manufacturing here. This can include factory
            coordination, supplier communication, quality checks, packaging, or
            what changed when the product had to be built repeatedly.
          </p>
          <p>
            Use this paragraph for a specific production story, constraint,
            mistake, or decision that shaped the final product.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Team and Workshop"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(96, 98)}
        />

        <MozartParagraphSection name="Team Notes">
          <p>
            Write about the team and workshop here. This can cover
            collaboration, roles, iteration cycles, or the people who helped
            turn the work into a real product.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Launch Assets"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(99, 104)}
        />

        <MozartParagraphSection name="Launch Notes">
          <p>
            Write about the launch assets here. This can explain how the product
            was presented, photographed, filmed, or positioned for customers and
            investors.
          </p>
          <p>
            Add another paragraph here if the launch story needs more context
            before the website section.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Marketing Website"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(105, 111)}
        />

        <MozartParagraphSection name="Website Notes">
          <p>
            Write about the marketing website here. This can cover copy, visual
            direction, product education, conversion goals, or how the online
            presence supported the product.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Product Photography"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(112, 121)}
        />

        <MozartParagraphSection name="Photography Notes">
          <p>
            Write about the product photography here. This can describe what the
            images were meant to communicate and how they fit into the larger
            story of Mozart.
          </p>
          <p>
            Use this paragraph for any details about staging, lighting,
            audience, or final presentation.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Final Prototype"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(122, 128)}
        />

        <MozartParagraphSection name="Final Prototype Notes">
          <p>
            Write about the final prototype here. This can be where you
            summarize what the product became, what worked, and what still
            needed to improve.
          </p>
        </MozartParagraphSection>

        <MozartGallerySection
          name="Closing Details"
          onSelectPhoto={openPhoto}
          photoPaths={makeFullSlidePaths(129, 132)}
        />
      </article>

      {selectedPhotoPath && (
        <section
          aria-label="Mozart photo"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 px-4 py-6"
          onClick={closeModal}
          role="dialog"
        >
          <button
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-sm backdrop-blur transition duration-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            onClick={closeModal}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-y-auto pt-10">
            <div
              className="flex w-full max-w-6xl flex-col items-center gap-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-center">
                <div className="relative inline-flex max-w-full overflow-hidden rounded-lg bg-black/10 shadow-2xl">
                  <img
                    alt="Mozart project"
                    className="block max-h-[calc(100vh-280px)] max-w-full object-contain will-change-transform md:max-h-[calc(100vh-220px)]"
                    onWheel={handleImageWheel}
                    src={selectedPhotoPath}
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transition: "transform 120ms linear",
                    }}
                  />

                  {selectedRowHasMultiplePhotos && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                      <button
                        aria-label="Previous photo"
                        className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white shadow-sm backdrop-blur transition duration-200 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                        onClick={() => goToRelativeSlide(-1)}
                        type="button"
                      >
                        <ChevronLeft aria-hidden="true" className="h-6 w-6" />
                      </button>

                      <button
                        aria-label="Next photo"
                        className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white shadow-sm backdrop-blur transition duration-200 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                        onClick={() => goToRelativeSlide(1)}
                        type="button"
                      >
                        <ChevronRight aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-row items-center gap-2 rounded-2xl bg-white/10 px-2 py-1.5 text-white shadow-sm backdrop-blur md:flex-col md:px-1.5 md:py-2 md:self-start">
                  <button
                    aria-label="Zoom in"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-200 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!canZoomIn}
                    onClick={zoomIn}
                    type="button"
                  >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </button>

                  <div className="relative flex h-8 w-24 items-center justify-center md:h-28 md:w-8">
                    <input
                      aria-label="Zoom"
                      className="h-1.5 w-24 cursor-pointer appearance-none rounded-full bg-white/30 accent-white md:[transform:rotate(-90deg)]"
                      max={MAX_ZOOM_LEVEL}
                      min={MIN_ZOOM_LEVEL}
                      onChange={(event) =>
                        setResolvedZoomLevel(Number(event.target.value))
                      }
                      step={SLIDER_ZOOM_STEP}
                      type="range"
                      value={zoomLevel}
                    />
                  </div>

                  <button
                    aria-label="Zoom out"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-200 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!canZoomOut}
                    onClick={zoomOut}
                    type="button"
                  >
                    <Minus aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {selectedRowHasMultiplePhotos && (
                <div className="grid max-w-full grid-cols-[repeat(auto-fit,minmax(3rem,3rem))] justify-center gap-2 p-1 sm:grid-cols-[repeat(auto-fit,minmax(3.5rem,3.5rem))]">
                  {selectedPhotoPaths.map((photoPath) => {
                    const slideNumber = getSlideNumber(photoPath);
                    const isActive = selectedPhotoPath === photoPath;

                    return (
                      <button
                        aria-label={
                          slideNumber
                            ? `Open Mozart photo ${slideNumber}`
                            : "Open Mozart photo"
                        }
                        className={`h-12 w-12 overflow-hidden rounded bg-white/10 transition duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:h-14 sm:w-14 ${
                          isActive ? "ring-2 ring-white" : ""
                        }`}
                        key={photoPath}
                        onClick={() => openPhoto(photoPath, selectedPhotoPaths)}
                        type="button"
                      >
                        <img
                          alt="Mozart project"
                          className="h-full w-full object-cover"
                          src={getPreviewPath(photoPath)}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </RootLayout>
  );
}
