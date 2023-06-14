import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

export default function EditorInput() {
  const [value, setValue] = useState("");
  console.log("VALUE ===> ", value);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: value }} />
      <Editor
        apiKey="pa1308kn2mktpf9fwxj5ope6zmk4oigwo09zhyrv4e1ep5y2"
        // initialValue="<p>type hassan jooon</p>"
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
        }}
        disabled={false}
        value={value}
        init={{
          height: 400,
          menubar: false,
        }}
      />
    </>
  );
}
