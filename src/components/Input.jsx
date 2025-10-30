
export default function Input({ label, ...props }) {

    const { className = "", ...rest } = props;

    return (
        <div className="flex flex-col p-4">
            <label htmlFor={label} className="p-1">{label}</label>
            <input id={label} className={`bg-stone-200 p-2 border-solid border-2 border-b-stone-300 ${className}`} {...rest} />
        </div>
    )
}