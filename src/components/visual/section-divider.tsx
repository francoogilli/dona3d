export default function SectionDivider () {
    return (
        <>
           <section className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
            <div className="relative rounded-3xl border-t border-slate-6 pt-20">
                <div aria-hidden="true" className="left-1/2 top-0 w-[300px]  user-select-none center pointer-events-none absolute h-px max-w-[300px] -translate-x-1/2 -translate-y-1/2"
                    style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)' }}
                >
                </div>
                <div aria-hidden="true" className="-top-1 left-1/2 h-[200px] w-full md:max-w-[400px] user-select-none center pointer-events-none absolute max-w-[300px] -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)"
                  }}
                >

                </div>
            </div>
           </section>

        </>
    )
}