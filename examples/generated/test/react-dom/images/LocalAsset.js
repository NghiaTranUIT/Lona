import React from "react"
import styled, { ThemeProvider } from "styled-components"

import colors from "../colors"
import textStyles from "../textStyles"

export default class LocalAsset extends React.Component {
  render() {


    let theme = { "view": { "normal": {} }, "image": { "normal": {} } }
    return (
      <ThemeProvider theme={theme}>
        <div style={Object.assign(styles.view, {})}>
          <img
            style={Object.assign(styles.image, {})}
            source={require("../assets/icon_128x128.png")}

          />
        </div>
      </ThemeProvider>
    );
  }
};

let styles = {
  view: {
    alignItems: "stretch",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column"
  },
  image: {
    alignItems: "stretch",
    backgroundColor: "#D8D8D8",
    display: "flex",
    flexDirection: "column",
    width: "100px",
    height: "100px"
  }
}