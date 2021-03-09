import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor} from 'react-codemirror2';


function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

function handleChange(editor, data, value) {
    onChange(value)
}
    return (
        <div clasName="pan-container">
        <div className="pan-title">
        {displayName}
        {/* <button>O/C</button> */}
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true
        }}
        />
                </div>
    );
}

export default Editor;

import React, { useEffect, useState } from 'react';
import Editor from './Editor'


function Playground() {
const [html, setHtml] = useState('')
const [js, setJs] = useState('')

// useEffect(() => {
//     const timeout = setTimeout(() => {
//     setSrcDoc(`
//     <html>
// <script>${html}</script>
// <script>${js}</script>
// </html>
//     `)
//     }, 250)
// }, [js])

const srcDoc = `
<html>
<body>${html}</body>
<script>${js}</script>
</html>
`

    return (
        <>
        <div className="top-pan">
        {/* <Editor 
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
        /> */}
        <Editor 
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
        />
        </div>

        <div className="pan">
        <iframe className="pan2"
                srcDoc={js}
                title="output"
                sandbox='allow-same-origin allow-scripts allow-popups allow-forms' 
                frameBorder="0"
                width="50%"
                height="50%"
                />

        </div>
        </>
    );
}

export default Playground;
