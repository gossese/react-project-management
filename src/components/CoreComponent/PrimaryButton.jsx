
export default function PrimaryButton({ onClick, children, ...props }) {

    return (
        <button onClick={onClick} {...props} className="bg-stone-700 text-stone-400 rounded-md p-3 text-xs md:text-base font-light w-fit hover:text-stone-100 hover:bg-stone-600">{children}</button>
    )
}