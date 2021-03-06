import { Icon } from "@material-ui/core"

const IconWrapper: React.FC<{ src: string, height?: number, width?: number, ml?: number,onClick?:()=>void }> = ({ src, height = "30px", width = "30px", ml = "15",onClick }) => {
    return (
      <Icon style={{ marginLeft: ml + "px",height:"auto",width:"auto" }} onClick={onClick} >
        <img
          style={{
            verticalAlign: 'middle',
            height: height + "px",
            width: width + "px",
          }}
          src={src}
          srcSet={`${src} 2x`}
          alt="Settings"
        />
      </Icon>
    )
  }

  export default IconWrapper