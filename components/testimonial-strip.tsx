export function TestimonialStrip() {
  const notes = ['“My drawer finally has sections instead of piles.”', '“The cupboard feels bigger without changing the cupboard.”', '“I can find the thing I need without taking everything out.”'];
  return <section className="testimonial-section"><p className="eyebrow">THE GOAL</p><h2>Make daily life feel lighter.</h2><div className="testimonial-grid">{notes.map((note, i) => <div className="quote-card" key={i}><span>★★★★★</span><p>{note}</p><small>Everyday organiser setup</small></div>)}</div></section>;
}
