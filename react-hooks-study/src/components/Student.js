import React from 'react'

export default function Student({ name }) {
  return (
    <div>
        <span>{ name }</span>
        <button>삭제</button>
    </div>
  )
}
