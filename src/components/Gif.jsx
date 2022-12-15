import { React, useState } from 'react'

export default function Gif ({ title, id, url }) {
  return (
    <a href={`#${id}`}>
      <img alt={title} src={url} />
      <h4>{title}</h4>
    </a>
  )
}
