import { useMediaQuery } from "@mui/material";

 export const AboutSolisStyles=()=>{
    
  const matches = useMediaQuery("(max-width:768px)");
    return !matches?{wrapGridStyles : {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "50px",
    padding: "5% 10%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "1s",
  },
   bottomGrid : {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: "5%",
  },
   reasonWrapGrid : {
    backgroundColor: "transparent",
    width: "70%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: "5%",
  },
   reasonSubGrid : {
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
   headerBoxStyle : {
    color: "#3c3c3c",
    fontSize: "80px",
    fontWeight: "900",
  },
   reasonBoxStyle : {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "start",
    columnGap: "5%",
    marginBottom: "20px",
  },
   reasonImageBoxStyle : {
    width: "30%",
    height: "100%",
    backgroundColor: "transparent",
  },
   imageStyle : {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    boxShadow: "rgba(100, 100, 111, 0.2) 20px 77px 29px 0px",
  },}:{wrapGridStyles : {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "50px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 77px 29px 0px",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "1s",
    marginTop:"50px",
    padding:"0px 10px"
  },
   bottomGrid : {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-around",
    row: "20px",
  },
   reasonWrapGrid : {
    backgroundColor: "transparent",
    width: "100%%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: "5%",
  },
   reasonSubGrid : {
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
   headerBoxStyle : {
    color: "#3c3c3c",
    fontSize: "40px",
    fontWeight: "900",
    paddingTop:"20px"
  },
   reasonBoxStyle : {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "start",
    columnGap: "5%",
    marginBottom: "20px",
  },
   reasonImageBoxStyle : {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
   imageStyle : {
    width: "100%",
    height: "100%",
    borderRadius: "20px 20px 0px 0px",
    boxShadow: "rgba(100, 100, 111, 0.2) 20px 77px 29px 0px",
  },}}