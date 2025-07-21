import logo from "../images/React.png";

function MainHeader(){
    return (
      <header>
        <div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
            <img src={logo} style={{height:"35px", verticalAlign:"top"}}></img>
           <span className="h2 pt-4 text-white-50"> Welcome to my App - Taskopedia</span> 
        </div>
      </header>
    );
  }
  
  const SubHeaderStyle ={
    color: "blueviolet",
    backgroundColor: "lightgrey",
  }
  function SubHeader(){
    return (
      <p style={SubHeaderStyle} className="text-center">This will be a exciting course</p>
    );
  }
  const Header = () =>{
    return (
      <div>
       <MainHeader></MainHeader> 
        <SubHeader></SubHeader>
      </div>);
  }
export default Header;
  