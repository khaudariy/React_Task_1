import './Posts.css';
export default function POsts (props) {

    return( 
     <div className="div-main">
        <div className="div-child">
             <h1 className="H">{props.name}</h1>
             <hr className="HR"></hr>
             <p className="Pg">{props.article}</p>
        </div>
    </div>);
}