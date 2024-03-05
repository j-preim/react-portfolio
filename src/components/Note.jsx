
/*
  This component can stay as-is. Because it's on the Home page, 
  it's just easier to have the Home page give it the current note 
  via props.

  If we made this a standalone page, though, then we would look for 
  the note id in the url params, and do a database query for the 
  note data.
*/

export default function Note(props){

  if( !props.currentNote ) return <></>
  return (
    <>
      <h1>{ props.currentNote.title }</h1>
      <p>{props.currentNote.body}</p>
      <p>
        This note is of 

          { props.currentNote.priority === "1" && 
          <span> Low </span>
           }
          { props.currentNote.priority === "2" && (<span> Medium </span>) }
          { props.currentNote.priority === "3" && (<span> High </span>) }

        priority
      </p>
    </>
  )
}