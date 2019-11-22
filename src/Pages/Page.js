import React from 'react';

function Page({
  children,
}) {
  const pageStyle = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  }

  const pageContainer = {
    display: "block",
  }
  return (
    <div style={pageStyle}>
      <div style={pageContainer}>
        {children}
      </div>
    </div>
  )
}

export default Page;
