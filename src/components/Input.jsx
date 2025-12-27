
export default function Input({ label, isTextarea = false, className="", error, ...rest }) {

    const basicClasses = `text-stone-600 p-1 border-solid border-b-2 hover:border-b-black focus:border-b-black focus:outline-none focus:bg-stone-300 rounded `; 
    const classes = error ? basicClasses + 'bg-red-200 border-red-600' : basicClasses + 'border-b-stone-300 bg-stone-200'
    
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
            {/* {error && <p className="text-red-600">{error}</p>} */}
        </div>
    )
}