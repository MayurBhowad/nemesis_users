import React from 'react'
import Form from './forms/Form.template'

function AddUser() {
    let queryDict = {}
    window.location.search.substr(1).split("&").forEach(item => queryDict[item.split("=")[0] = item.split("=")])

    return (
        <div>
            <Form />
        </div>
    )
}

export default AddUser
