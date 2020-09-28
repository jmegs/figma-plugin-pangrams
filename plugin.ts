// import the list of pangrams
import pangrams from "./pangrams.json"

async function Pangrams() {
  let selectedTextNodes: TextNode[] = []
  for (const node of figma.currentPage.selection) {
    if (node.type === "TEXT") {
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


// If your plugin is only meant to do something if a certain type of nodes is selected, what happens when:
  // The user has nothing selected?
  // The wrong type of node selected?
  // Multiple things selected?
  // A component selected? Are you alright with the change propagating to potentially hundreds of instances?

  // If your plugin modifies a text layer, what happens if the font for that text layer is missing?

  // If your plugin can edit a component, what happens if the component comes from the team library?

  // If your plugin needs to load resources over the network, what happens if the user is temporary offline when they run your plugin?

  // If your plugin stays open for a while:
    // What happens if the user deletes a node you currently have a reference to?
    // What happens a multiplayer even causes changes in the document?

// If your plugin is concerned with the position of layers, what happens if something is rotated?

// If your plugin can traverse large parts of the document (e.g. search for a node), what happens if the document is very large?

// If you're using a bundler, have you checked the output size of your plugin? Could you make it smaller (e.g. by running your bundler in release mode)?
