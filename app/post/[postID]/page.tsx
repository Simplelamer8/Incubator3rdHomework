import React from 'react'

export default function page({params}:{params: {postID: number}}) {
  return (
    <div>postID: {params.postID}</div>
  )
}
