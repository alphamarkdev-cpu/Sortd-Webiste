export function WhySortd() {
  const items = [
    ['01', 'See what you have', 'Open storage and useful sections reduce the “where did I keep that?” problem.'],
    ['02', 'Use height & depth', 'Stack, divide and lift items so the same cupboard can work harder.'],
    ['03', 'Keep it maintainable', 'The best organising system is one you can reset in minutes, not hours.'],
  ];
  return <section className="why-section" id="why-sortd"><div className="why-intro"><p className="eyebrow">THE SORTD METHOD</p><h2>Organising isn’t about owning less. It’s about <span>using space better.</span></h2><p>We focus on practical utility: products that make existing shelves, drawers and cupboards easier to access and easier to maintain.</p></div><div className="steps">{items.map(([num,title,copy]) => <div className="step" key={num}><span className="step-num">{num}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>;
}
