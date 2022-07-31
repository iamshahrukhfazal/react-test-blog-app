
import {useEffect, useState} from "react"
import RichTextEditor from 'react-rte';

export const BodyTextEditor = ({ value, setValue,createComment }) =>{
    const [editorState, setEditorState] = useState(
        () => RichTextEditor.createEmptyValue(),
      )
    useEffect(()=>{setValue(editorState.toString("html"))},[editorState])
  
    return   <>
         <RichTextEditor
                    value={editorState}
                    onChange={(value)=>{setEditorState(value)}}
            />
            <button onClick={()=>{createComment(); setValue(editorState.value="")}} class="bg-blue-500 w-full mt-3 py-2 hover:bg-blue-700 text-white font-bold px-4 border border-blue-700 rounded">
                Add Comment
            </button>
    </>
  }