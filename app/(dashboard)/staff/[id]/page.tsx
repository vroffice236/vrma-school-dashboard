import React from 'react'

const StaffIdPage = ({params} : {params : {id: string}}) => {
    const id = params.id;
  
    return (
    <div>
        Staff : {id} <br />
        - Admin <br />
          - profile card (editable) <br />
          - documents (upload, view, delete) <br />
          - health records (upload, view, delete) <br />
          - expenses (view, add, remove) <  br />
          - payroll (view, add, remove) <br />
          - schedule (view, add, remove) <br />
    </div>
  )
}

export default StaffIdPage