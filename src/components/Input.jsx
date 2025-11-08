
export default function Input({ label, isTextarea = false, ...props }) {

    const { className = "", ...rest } = props; //destructuring; appends all found classes to const className
    const classes = `bg-stone-200 text-stone-600 p-1 border-solid border-b-2 border-b-stone-300 hover:border-b-black focus:border-b-black focus:outline-none focus:bg-stone-300 rounded ${className}`;
    
    return (
        <div className="flex flex-col gap-1 my-4">
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