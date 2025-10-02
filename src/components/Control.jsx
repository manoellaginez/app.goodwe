export default function Control(props) {
    const textLabel = props.label
    
    const type = props.type
    const placeholder = props.placeholder
    const name = props.name
    const id = props.id
    const className = props.className

    const set = props.set
    const value = props.value

    return(
        <div>
            <label>{textLabel}</label>
            <input
            type={type} placeholder={placeholder} name={name} id={id} className={className}
            onChange={(e) => set(e.target.value)} value={value}/>
        </div>
    )
}