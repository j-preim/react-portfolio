import useNotePriority from "../hooks/useNotePriority"

export default function ListNotes(props){

  const { getPriorityValue } = useNotePriority()

  if( !props.notes.length ) return ( <p>No notes have been added yet!</p>)
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          { props.notes.map( (note) => (
            <tr key={note.title}>
              <td>
                <span>
                  <a href={`/note/${note?._id}`}>
                    { note.title }
                  </a>
                </span>
              </td>
              <td>{ note.body }</td>
              <td>
                <span>
                  { getPriorityValue(note.priority) }
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}