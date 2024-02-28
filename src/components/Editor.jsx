import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';
import { useCallback } from 'react';
import { materialDark } from '@uiw/codemirror-theme-material';
import "../index.css"


const Editor = () => {

  const [value,setValue] = useState("console.log('Hello Worlde');")
  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);


  
  return (
    <div >
      <CodeMirror value={value} 
      theme={materialDark }
       extensions={[javascript({ jsx: true })]}
      height='100vh'  
      
      onChange={onChange} 
      
      />
    </div>
  )
}

export default Editor