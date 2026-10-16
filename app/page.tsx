'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Building2, Calculator, Check, ChevronDown, CircleHelp, ClipboardList, MapPin, Plus, ShieldCheck, Trash2, X } from 'lucide-react'

const initialProperties = [
  { id: 1, name: 'North logistics yard', type: 'Logistics yard', area: '480000', units: '8', condition: 'Operational' },
  { id: 2, name: 'Distribution park B', type: 'Warehouse park', area: '275000', units: '4', condition: 'Operational' },
]

const propertyTypes = ['Logistics yard', 'Warehouse park', 'Industrial estate', 'Cold storage campus']

export default function Page() {
  const [properties, setProperties] = useState(initialProperties)
  const [submitted, setSubmitted] = useState(false)

  const totals = useMemo(() => ({
    area: properties.reduce((sum, property) => sum + (Number(property.area) || 0), 0),
    units: properties.reduce((sum, property) => sum + (Number(property.units) || 0), 0),
    sites: properties.length,
  }), [properties])

  function updateProperty(id: number, key: string, value: string) {
    setProperties((current) => current.map((property) => property.id === id ? { ...property, [key]: value } : property))
    setSubmitted(false)
  }

  function addProperty() {
    setProperties((current) => [...current, { id: Date.now(), name: '', type: 'Logistics yard', area: '', units: '', condition: 'Operational' }])
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f0e7] selection:bg-[#c79432] selection:text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#c79432]/40 pb-5">
          <div className="flex items-center gap-4">
            <div className="grid size-10 place-items-center border border-[#c79432] bg-[#12100b] text-[#d8a63a]"><Building2 size={18} strokeWidth={1.5} /></div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#c79432]">Sovereign / Operations</p>
              <h1 className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#eee9de] sm:text-base">Industrial Estate Matrix</h1>
            </div>
          </div>
          <div className="hidden items-center gap-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8a7f] sm:flex"><span className="flex items-center gap-2"><span className="size-1.5 bg-[#c79432]" /> Local processing</span><span>v 2.04</span></div>
        </header>

        <section className="grid gap-10 border-b border-[#39352e] py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#c79432]"><span className="h-px w-10 bg-[#c79432]" /> Estate maintenance planning</div>
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-[#f3eee4] sm:text-6xl">Bring every site into <span className="text-[#c79432]">clear operational view.</span></h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#a5a097]">A precise intake matrix for commercial logistics yards and warehouse parks. Build a maintenance brief from your portfolio footprint — without sending your data anywhere.</p>
            <div className="mt-10 flex flex-wrap gap-3"><a href="#intake" className="inline-flex items-center gap-3 bg-[#c79432] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#e0b24c]">Start site intake <ArrowRight size={15} /></a><a href="#privacy" className="inline-flex items-center gap-2 border border-[#5a554c] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#c8c1b6] transition hover:border-[#c79432]">Data & privacy</a></div>
          </div>
          <div className="self-end border-l border-[#c79432] pl-6 lg:pl-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#777168]">Matrix status / 01</p>
            <p className="mt-6 max-w-sm text-2xl leading-tight text-[#e8e2d6]">Your working footprint, translated into a sharper maintenance conversation.</p>
            <div className="mt-8 grid grid-cols-2 gap-px border border-[#39352e] bg-[#39352e] sm:grid-cols-3">
              {[['01', 'Local only'], ['02', 'No account'], ['03', 'Instant brief']].map(([number, label]) => <div key={number} className="bg-[#0a0a0a] p-4"><p className="font-mono text-xs text-[#c79432]">{number}</p><p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#b0aaa0]">{label}</p></div>)}
            </div>
          </div>
        </section>

        <section id="intake" className="py-12 lg:py-16">
          <div className="mb-9 flex flex-col justify-between gap-4 border-b border-[#39352e] pb-6 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#c79432]">01 / Portfolio intake</p><h3 className="mt-3 text-2xl tracking-[-0.02em] text-[#f0ebe1]">Define your operating estate</h3></div><p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#777168]">All fields are optional</p></div>
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="flex flex-col gap-4">
              {properties.map((property, index) => <article key={property.id} className="border border-[#39352e] bg-[#0e0e0e] p-5 sm:p-7">
                <div className="mb-7 flex items-center justify-between"><div className="flex items-center gap-3"><span className="font-mono text-xs text-[#c79432]">0{index + 1}</span><span className="h-px w-8 bg-[#39352e]" /><span className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#777168]">Property record</span></div>{properties.length > 1 && <button aria-label={`Remove ${property.name || 'property'}`} onClick={() => setProperties(properties.filter((item) => item.id !== property.id))} className="text-[#777168] transition hover:text-[#c79432]"><Trash2 size={16} /></button>}</div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 sm:col-span-2"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9c958a]">Estate / site name</span><input value={property.name} onChange={(e) => updateProperty(property.id, 'name', e.target.value)} placeholder="e.g. North logistics yard" className="h-12 border-b border-[#5a554c] bg-transparent px-0 text-base text-[#eee9de] outline-none placeholder:text-[#4f4b45] focus:border-[#c79432]" /></label>
                  <label className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9c958a]">Property classification</span><div className="relative"><select value={property.type} onChange={(e) => updateProperty(property.id, 'type', e.target.value)} className="h-12 w-full appearance-none border-b border-[#5a554c] bg-transparent px-0 text-sm text-[#eee9de] outline-none focus:border-[#c79432]">{propertyTypes.map((type) => <option className="bg-[#151515]" key={type}>{type}</option>)}</select><ChevronDown size={15} className="pointer-events-none absolute right-0 top-4 text-[#c79432]" /></div></label>
                  <label className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9c958a]">Gross area / sq ft</span><input inputMode="numeric" value={property.area} onChange={(e) => updateProperty(property.id, 'area', e.target.value.replace(/\D/g, ''))} placeholder="0" className="h-12 border-b border-[#5a554c] bg-transparent px-0 font-mono text-base text-[#d8a63a] outline-none placeholder:text-[#4f4b45] focus:border-[#c79432]" /></label>
                  <label className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9c958a]">Buildings / units</span><input inputMode="numeric" value={property.units} onChange={(e) => updateProperty(property.id, 'units', e.target.value.replace(/\D/g, ''))} placeholder="0" className="h-12 border-b border-[#5a554c] bg-transparent px-0 font-mono text-base text-[#d8a63a] outline-none placeholder:text-[#4f4b45] focus:border-[#c79432]" /></label>
                  <label className="flex flex-col gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9c958a]">Current condition</span><div className="relative"><select value={property.condition} onChange={(e) => updateProperty(property.id, 'condition', e.target.value)} className="h-12 w-full appearance-none border-b border-[#5a554c] bg-transparent px-0 text-sm text-[#eee9de] outline-none focus:border-[#c79432]"><option className="bg-[#151515]">Operational</option><option className="bg-[#151515]">Requires review</option><option className="bg-[#151515]">Planned development</option></select><ChevronDown size={15} className="pointer-events-none absolute right-0 top-4 text-[#c79432]" /></div></label>
                </div>
              </article>)}
              <button onClick={addProperty} className="flex h-14 items-center justify-center gap-2 border border-dashed border-[#5a554c] font-mono text-[11px] uppercase tracking-[0.15em] text-[#b7afa3] transition hover:border-[#c79432] hover:text-[#d8a63a]"><Plus size={15} /> Add another property</button>
            </div>
            <aside className="h-fit border border-[#c79432] bg-[#12100b] p-6 lg:sticky lg:top-6"><div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#c79432]"><Calculator size={14} /> Live matrix</div><p className="mt-5 text-sm leading-6 text-[#aba397]">Your portfolio summary updates as you type. Nothing is stored or transmitted.</p><div className="mt-7 flex flex-col gap-5 border-t border-[#54431f] pt-5"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#81765d]">Total gross area</p><p className="mt-1 font-mono text-3xl text-[#e0ad3e]">{totals.area.toLocaleString()} <span className="text-xs text-[#9a8c6d]">sq ft</span></p></div><div className="grid grid-cols-2 gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#81765d]">Properties</p><p className="mt-1 font-mono text-xl text-[#e0ad3e]">{String(totals.sites).padStart(2, '0')}</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#81765d]">Units</p><p className="mt-1 font-mono text-xl text-[#e0ad3e]">{String(totals.units).padStart(2, '0')}</p></div></div></div><button onClick={() => setSubmitted(true)} className="mt-8 flex w-full items-center justify-center gap-2 bg-[#c79432] px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-black hover:bg-[#e0b24c]">{submitted ? <><Check size={15} /> Brief ready</> : <>Generate maintenance brief <ArrowRight size={15} /></>}</button>{submitted && <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#a99463]">Calculated locally / no submission made</p>}</aside>
          </div>
        </section>

        <section id="privacy" className="grid gap-8 border-t border-[#39352e] py-12 lg:grid-cols-[1fr_1fr] lg:py-16"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#c79432]">02 / Privacy policy</p><h3 className="mt-3 text-2xl tracking-[-0.02em] text-[#f0ebe1]">Your estate data stays yours.</h3></div><div className="flex gap-4 text-sm leading-7 text-[#a5a097]"><ShieldCheck className="mt-1 shrink-0 text-[#c79432]" size={18} /><p>This planning tool runs calculations entirely in your browser. We do not collect, store, sell, or transmit the property names, square footage, unit counts, or condition details entered here. No account or cookies are required. Closing or refreshing this page clears the working data. For questions about this policy, contact the Sovereign Industrial Estate Matrix team directly.</p></div></section>

        <footer className="flex flex-col gap-5 border-t border-[#39352e] py-7 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6f6a62] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Sovereign Industrial Estate Matrix</span><span className="flex items-center gap-2"><CircleHelp size={13} /> Commercial maintenance planning portal</span></footer>
      </div>
    </main>
  )
}
