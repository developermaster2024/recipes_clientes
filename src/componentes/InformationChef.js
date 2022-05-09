import React from 'react'
import {TiContacts} from "react-icons/ti"

const InformationChef = () => {
  return (
      <div>
    <button className="flex items-center space-x-2 text-black text-xl font-semibold">
            <TiContacts className="text-teal-400" />
            <span>Information</span>
          </button>
          <div className="mt-6 space-y-4">
            <p>Phone: +54 911 254 8899</p>
            <p>Instagram: @AnyaTaylorChef</p>
            <p>Facebook: Anya Taylor Chef</p>
            <p>Whatsapp: +54 911 254 8899</p>
          </div>
          </div>
  )
}

export default InformationChef