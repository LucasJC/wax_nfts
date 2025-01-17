/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import "antd/dist/antd.css"

import React from "react"
import AppWrapper from "./src/components/AppWrapper"

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <AppWrapper {...props}>{element}</AppWrapper>
}
