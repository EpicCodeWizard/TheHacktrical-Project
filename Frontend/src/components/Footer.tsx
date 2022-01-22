import React from "react"

const Footer = () => {
    return (
        <footer className="relative bg-gray-300 pt-8 pb-6">
            <div className="flex items-center justify-center">
                Copyright © {new Date().getFullYear()}{" "}Thehacktrical.
            </div>
        </footer>
    )
}

export default Footer
