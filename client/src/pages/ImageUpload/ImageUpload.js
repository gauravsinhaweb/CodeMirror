import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Link } from "react-router-dom"

function ImageUpload(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: acceptedFiles => {
            setFiles(
                acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file) // eslint-disable-line no-undef
                })
                )
            )
        }
    })

    return (
        <div className="container">
            <header className="header pt-36 grid place-items-center cursor-pointer">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ? <p className="text-3xl">Drop image here</p> : <div> <p className="text-3xl">Select file or <br />
                            Drag n Drop</p>
                            <div className="border-dashed border-4 my-8 border-black h-56 w-56">
                                <p className="text-6xl grid place-items-center h-full">+</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="preview grid place-items-center">
                    {files.map(file => (
                        <div key={file.name}>
                            <img src={file.preview} alt="upload" className="h-96 w-full"/>
                            {/* <div className="name">{file.name}</div> */}
                        </div>
                    ))}
                </div>
            </header>

            <div className="grid place-items-center my-8">
                <Link to="/result">
                    <button className="bg-black p-2 text-xl px-8 text-white">
                        Continue
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default ImageUpload
