import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useNotePriority from "../hooks/useNotePriority"

/*
  We will now query the database for the note 
  we need, rather than use the json file.
*/
export default function Note(){

  const params = useParams()
  const { getPriorityValue } = useNotePriority()

  const [ note, setNote ] = useState()

  async function getNote(){
    try {
      const query = await fetch(`/api/note/${params.id}`)
      const result = await query.json()
      if( result.status === "success" ){
        setNote(result.payload)
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  
  useEffect(() => {
    getNote()
  },[])

  if( !note ) return <>Loading...</>
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{note?.title}</h1>

          <div className="mt-4">
            { note.body }
          </div>

          <div className="mt-2">
            Priority: { getPriorityValue(note.priority) }
          </div>
        </div>
      </div>
    </div>
  )
}