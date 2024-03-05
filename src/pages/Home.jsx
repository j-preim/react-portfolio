import { useEffect, useState } from 'react'
import AddNote from '../components/AddNote'
import ListNotes from '../components/ListNotes'
import Note from '../components/Note'
import useVerifyUser from '../hooks/useVerifyUser'

import "/node_modules/bootstrap/dist/css/bootstrap.min.css"


export default function Home() {

  const [ notes, setNotes ] = useState([])
  const [ currentNote, setCurrentNote ] = useState(null)

  const { isLoggedIn } = useVerifyUser()

  async function getNotes(){
    try {
      const query = await fetch("/api/note")
      const result = await query.json()
      if( result.status === "success" ){
        setNotes(result.payload)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getNotes()
  },[])


  return (
    <>
      <div className="container">
        <div className="row">
          
          <div className="col-6">
            { isLoggedIn === true ? (
              <AddNote getNotes={getNotes} />
            ): (
              <p>You must be logged in to add notes!</p>
            )}
          </div>

          <div className="col-6">
            { isLoggedIn === true ? (
              <ListNotes notes={notes} setCurrentNote={setCurrentNote} />
            ) : (
              <p>You must be logged in to view notes!</p>
            )}
          </div>
        </div>
      </div>
    
    </>
  )
}

