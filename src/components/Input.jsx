
export default function Input({ label, isTextarea = false, className="", ...rest }) {

    const classes = `bg-stone-200 text-stone-600 p-1 border-solid border-b-2 border-b-stone-300 hover:border-b-black focus:border-b-black focus:outline-none focus:bg-stone-300 rounded`;
    
    const divClasses = `flex flex-col gap-1 my-4 ${className}`;
    
    return (
        <div className={divClasses}>
            <label htmlFor={label} className="font-bold text-sm">{label}</label>
            {isTextarea ?
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