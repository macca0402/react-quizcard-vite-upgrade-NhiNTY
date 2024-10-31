import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./TextEditor.scss";

interface TextEditorProps {
    onContentChange: (value: string, type: string) => void;
    value?: string;
}

const TextEditor: React.FC<TextEditorProps> = React.memo(({ onContentChange, value }) => {
    const handleChange = (value: string, type: string) => {
        onContentChange(value, type);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [false, 'red'] }, { 'background': [false, 'red', 'yellow', 'skyblue', 'pink'] }]
        ]
    };

    return (
        <div>
            <ReactQuill
                className="quill-editor"
                value={value}
                onChange={(content) => handleChange(content, 'text')}
                theme="snow"
                modules={modules}
            />
        </div>
    );
});

export default TextEditor;
