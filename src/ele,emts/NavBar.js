export function Button({ btName ,clickFn, elem}) {
    return <button className="Button" onClick={clickFn}>{btName}</button>;
  }
 export function SearchBar() {
  return <div className="SearchBar">Type Anything here</div>;
 }
  
 


  export default function NavBar() {
    return(
       <section className="NavBar">
        <div className="Logo">BingeBox</div>
        <Button name={"Home"}/>
        <Button name={"Login"}/>
       </section>);
  }
  

