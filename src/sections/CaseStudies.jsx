import React from 'react';
export default function CaseStudies(){
  const cases = [
    {title:'Ecommerce performance rebuild', outcome:'+23% conversion', summary:'Frontend rewrite, image optimization, CDN & caching.'},
    {title:'Fintech payments platform', outcome:'PCI-compliant', summary:'Secure payments pipeline with tokenization.'},
    {title:'SaaS onboarding redesign', outcome:'60% faster activation', summary:'Design sprint & A/B experiments.'},
  ];
  return (
    <section id="cases">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Case Studies</h2>
            <div className="muted">Real projects with measurable outcomes</div>
          </div>
          <div className="small">Download full PDFs for sales decks</div>
        </div>
        <div style={{marginTop:18,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
          {cases.map((c,idx)=>(
            <div key={idx} className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:800}}>{c.title}</div>
                <div style={{fontWeight:800,color:'var(--gold)'}}>{c.outcome}</div>
              </div>
              <div className="muted" style={{marginTop:8}}>{c.summary}</div>
              <div style={{marginTop:12}} className="small"><a href="#">Download PDF</a></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
