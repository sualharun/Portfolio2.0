const leftImages = [
  '/assets/03976763-D3DF-439C-AF97-2086E1F9E3EB_1_201_a.jpeg',
  '/assets/07484A4C-B71B-4D54-8647-97ACE224845D_1_105_c.jpeg',
  '/assets/Greece3.jpeg',
  '/assets/DE4D17A3-E2D0-4650-856C-D83923B1DCAD_1_105_c.jpeg'
];

const centerImages = [
  '/assets/Hackathon.jpeg',
  '/assets/Greece2.jpeg',
  '/assets/Soccer.jpeg'
];

const rightImages = [
  '/assets/MachuPichu.jpeg',
  '/assets/B7FAE286-B3AA-40AC-80F4-9382B208C6F3_1_105_c.jpeg',
  '/assets/B3E06851-5D33-4855-AD6C-0415A17C6386_1_105_c.jpeg',
  '/assets/GreeceSolo.jpeg'
];

function ImageColumn({ images }) {
  return (
    <div className="sticky-scroll-column">
      {images.map((src) => (
        <figure key={src} className="sticky-scroll-figure">
          <img src={src} alt="Gallery visual" loading="lazy" />
        </figure>
      ))}
    </div>
  );
}

export default function StickyScrollShowcase() {
  return (
    <div className="sticky-scroll-wrap">
      <section className="sticky-scroll-gallery">
        <ImageColumn images={leftImages} />

        <div className="sticky-scroll-column-center">
          {centerImages.map((src) => (
            <figure key={src} className="sticky-scroll-figure sticky-scroll-figure-tall">
              <img src={src} alt="Gallery visual" loading="lazy" />
            </figure>
          ))}
        </div>

        <ImageColumn images={rightImages} />
      </section>
    </div>
  );
}
