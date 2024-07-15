"use client"
import { useState } from "react"
const { contact } = require("~/config/config.json")

interface IfaceRenderModal {
  isOpen: boolean
  callbackClose: any
}

const RenderModal = ({ isOpen, callbackClose }: IfaceRenderModal) => {
  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Resume</h3>
        <p className="py-4">
          At this time, availability for public access is not available. If you require access, please contact me directly. Thank you.
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-md"
              onClick={() => {
                callbackClose(false)
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default function Page() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <RenderModal isOpen={openModal} callbackClose={setOpenModal} />
      <div className="flex flex-row gap-3">
        <button
          className="btn btn-neutral"
          onClick={() => {
            setOpenModal(true)
          }}
        >
          Resume
        </button>
        {/* <a href="/contact" className="btn btn-outline">
          Contact
        </a> */}

        {contact.map((it: any, index: number) => (
          <a key={index} href={it.url_redirect} about={it.name} className="btn btn-sm btn-outline">
            {it.name}
          </a>
        ))}
      </div>
    </>
  )
}
