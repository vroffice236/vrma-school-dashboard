import React from 'react'

const StudentIdPage = ({params} : {params : {id: string}}) => {
    const id = params.id;
  
    return (
    <div>
        Student : {id} <br />
        - Admin <br />
          - profile card (editable) <br />
          - documents (upload, view, delete) <br />
          - electives or classes enrolled (add, remove) <br />
          - extended care (add, remove) <br />
          - health records (upload, view, delete) <br />
    </div>
  )
}

export default StudentIdPage