// import the list of pangrams
import pangrams from "./pangrams.json"

async function Pangrams() {
  let selectedTextNodes: TextNode[] = []
  
  for (const node of figma.currentPage.selection) {
    if (node.type === "TEXT") {
      
      if (node.hasMissingFont) {
        figma.closePlugin("Can't replace text with missing fonts")
      }
      
      await figma.loadFontAsync(node.fontName as FontName)
      
      selectedTextNodes.push(node)
    }
  }

	if (selectedTextNodes.length === 0) {
		figma.closePlugin("You must select at least one text node")
	}

  for (const node of selectedTextNodes) {
    const random = randomFromArray(pangrams)
    node.characters = random
  }
  figma.closePlugin()
}

function randomFromArray(array: Array<string>): string {
  return array[Math.floor(Math.random() * array.length)]
}

Pangrams()