import './Style.css';

const ContentContainer = (props) => {
  const classes = 'contentContainer ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default ContentContainer;