import React from "react"
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconWrapper from "components/Header/IconWrapper";


const useStyles = makeStyles({
    category: {
        borderRadius: "6px",
        width: "175px",
        height: "120px",
        marginRight: "15px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "13px"
    },
    categoryIcon: {},
    categoryDesc: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: "15px"
    },
    categoryTitle: {
        "fontFamily": "Manrope",
        "fontStyle": "normal",
        "fontWeight": 600,
        "fontSize": "15px",
        "lineHeight": "20px",
        "textAlign": "center",
        "color": "rgba(51, 55, 59, 0.7)"
    }

})

const Category: React.FC<{ icon: string, title: string, backgroundColor: string }> = ({ icon, title, backgroundColor }) => {
    const classes = useStyles();

    return (
        <div className={classes.category} style={{ backgroundColor: `${backgroundColor}` }}>
            <div className={classes.categoryIcon} >
                <IconWrapper src={icon} width={40} height={40} />
            </div>
            <div className={classes.categoryDesc} >
                <h1 className={classes.categoryTitle} >{title} </h1>
                <ArrowForwardIosIcon style={{ fill: "rgba(111, 110, 115, 0.7)" }} />
            </div>
        </div>
    )
}

export default Category