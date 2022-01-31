import "./Button.css"

function Button(props){
    const classes = ' Button '+props.className
    const action = props.onClick
    return(
        <div className = {classes} onClick = {action}>{props.children}</div>
    );
}

export default Button ;