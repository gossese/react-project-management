
export default function Input({ label, textarea = false, ...props }) {

    const { className = "", ...rest } = props;
    const classes = `bg-stone-200 p-1 border-solid border-2 border-b-stone-300 hover:border-b-black focus:border-b-black focus:outline-none rounded ${className}`;
    return (
        <div className="flex flex-col p-2">
            <label htmlFor={label} className=" font-bold tracking-tight pb-1">{label}</label>
            {textarea ?
                (
                    <textarea
                        id={label}
                        className={classes}
                        {...rest}
                    />
                ) :
                (
                    <input 
                        id={label}
                        className={classes}
                        {...rest} 
                    />
                )}
        </div>
    )
}