import { makeStyles } from '@material-ui/core';


export default makeStyles(() => ({
    modalHeader :{
        display:"flex",
        width:"100%",
        padding:"10px 0",
        justifyContent:"space-between"
        
    },
    filterNumber:{
        width:"30px",
        height:"30px",
        borderRadius:"50%",
        backgroundColor:"#885FFF",
        marginLeft:"10px",
        padding:"6px 10px"
        
    },
    filterSection:{
        display:"flex",
        alignItems:"center"
        
    },
    FilterTitle:{
        "fontFamily": "Manrope",
        "fontStyle": "normal",
        "fontWeight": 600,
        "fontSize": "16px",
        "lineHeight": "22px",
        "color": "#414047"
    },
    filters:{

    },
    checkbox : {
        display:"flex",
        alignItems:"center",
        marginTop:"23px",
        '& input':{
            background:"none",
            outline:"none",
            border:"2px solid #6F6E73",
            borderRadius:"1px",
            width:"15px",
            height:"21.5px",
            marginRight:"17.5px"
        },
        "& span":{
            "fontFamily": "Manrope",
            "fontStyle": "normal",
            "fontWeight": 600,
            "fontSize": "16px",
            "lineHeight": "22px",
            "color": "#414047"
        }
    },
    icon:{
        width:"35px",
        height:"35px",
        margin:"5px"
    }
}));
