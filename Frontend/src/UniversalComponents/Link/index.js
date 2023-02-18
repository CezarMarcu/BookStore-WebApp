import { LinkContainer,Link,ArrowIcon} from "./StyledComponents"

const LinkComponent = (props) => {
    return(
        <LinkContainer>
            <Link>{props.title}</Link>
            <ArrowIcon></ArrowIcon>
        </LinkContainer>
    )
}
export default LinkComponent