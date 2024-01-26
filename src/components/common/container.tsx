import React from 'react'

const Container: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <div className="flex min-h-full flex-col items-center justify-between pt-16 ">{children}</div>
    )
}

export default Container;