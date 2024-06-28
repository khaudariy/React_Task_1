import './Button.css';
export default function Button (props) {
    if (props.name == "" || props.name==null){
        return null
    }
    return( 
     <div >
                <button className="button-tag">{props.name}</button>






    </div>);
}