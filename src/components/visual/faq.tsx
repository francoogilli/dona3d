import { FAQs } from "src/data"
export default function FAQ(){
    return (
        <>
        <h1 className="font-bold text-5xl sm:text-6xl pb-7 pt-20 sm:pt-28 sm:pb-10">FAQs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-10 sm:gap-y-12">
            {FAQs.map((faq, index) => (
            <div key={index}>
                <h2 className="font-semibold text-lg pb-3">{faq.ask}</h2>
                <p className="text-zinc-700 dark:text-zinc-400">{faq.answer}</p>
            </div>
            ))}            
        </div>
        </>
    )
}
