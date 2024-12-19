import { useState } from "react";
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
return (
  <section className="recipe-display-styling">
    <ReactMarkdown>{props.recipe}</ReactMarkdown>
  </section>)
}



