import './Style.css'

export default function ContentContainer (props) {
    const classes = 'ContentContainer'
    return(
        <>
            <div className={classes}>{props.children}</div>
        </>
    )
}