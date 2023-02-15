import './Style.css'

const PageContent = (props) =>{
    const classes = 'contentContainer ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
export default PageContent


