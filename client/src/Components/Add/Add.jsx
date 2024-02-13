import React from 'react'

const Add = () => {
  return (
<div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      aria-labelledby="addModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addModalLabel">
                Add
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="mt-3">
                <label htmlFor="title">Name</label>
                <input type="text" placeholder="Image" class="form-control" />
            </div>
            <div className="mt-3">
                <label htmlFor="title">Slug</label>
                <input type="text" placeholder="Name" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>  )
}

export default Add