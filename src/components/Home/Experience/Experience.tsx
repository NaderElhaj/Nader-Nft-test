import React from "react"
import IconWrapper from '../../Header/IconWrapper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from "./style"

const Experience: React.FC<{ name: string, users: string, desc: string, icon: string }> = ({ name, users, desc, icon }) => {
    const classes = useStyles();

    return (
        <div className={classes.experience} >
            <div className={classes.content}>
                <IconWrapper src={icon} width={100} height={100} />
                <div className={classes.desc}>
                    <h1 className={classes.title} >{name} </h1>
                    <p className={classes.experienceDesc} >  {desc} </p>
                    <span className={classes.users} >{users} </span>
                </div>
            </div>
            <ArrowForwardIosIcon style={{ fill: "#6F6E73" }} />
            <div>

            </div>
        </div>
    )
}

export default Experience
