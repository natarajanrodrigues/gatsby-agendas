import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

import GlobalStyles from "../../styles/global"
// import MenuBar from "../MenuBar"
// import Sidebar from "../Sidebar"
// import { TransitionPortal } from "gatsby-plugin-transition-link"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      {/* <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal> */}
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
