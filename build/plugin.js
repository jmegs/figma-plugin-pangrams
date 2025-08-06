/* build/plugin.js 0 */
(function(exports){

'use strict';

var VERSION = "0", DEBUG = false;
var global=void 0!==global?global:"undefined"!=typeof window?window:this;function _stackTrace(cons){const x={stack:""};if(Error.captureStackTrace){Error.captureStackTrace(x,cons);const p=x.stack.indexOf("\n");if(-1!=p)return x.stack.substr(p+1)}return x.stack}function _parseStackFrame(sf){let m=/^\s*at\s+([^\s]+)\s+\((?:.+\/(src\/[^\:]+)|([^\:]+))\:(\d+)\:(\d+)\)$/.exec(sf);return m?{func:m[1],file:m[2]||m[3],line:parseInt(m[4]),col:parseInt(m[5])}:null}function panic(msg){if(console.error.apply(console,["panic:",msg].concat(Array.prototype.slice.call(arguments,1))),"undefined"==typeof process){let e=new Error(msg);throw e.name="Panic",e}console.error(_stackTrace(panic)),process.exit(2)}function print(){console.log.apply(console,Array.prototype.slice.call(arguments))}const dlog=()=>{};function assert(){}function repr(obj){try{return JSON.stringify(obj,null,2)}catch(_){return String(obj)}}


var pangrams = ["Two driven jocks help fax my big quiz.","Fickle jinx bog dwarves spy math quiz.","Public junk dwarves hug my quartz fox.","Quick fox jumps nightly above wizard.","Five quacking zephyrs jolt my wax bed.","The five boxing wizards jump quickly.","Pack my box with five dozen liquor jugs.","The quick brown fox jumps over the lazy dog.","When zombies arrive, quickly fax judge Pat.","Woven silk pyjamas exchanged for blue quartz.","The quick onyx goblin jumps over the lazy dwarf.","Foxy diva Jennifer Lopez wasn’t baking my quiche.","My girl wove six dozen plaid jackets before she quit.","Grumpy wizards make a toxic brew for the jovial queen.","A quivering Texas zombie fought republic linked jewelry.","All questions asked by five watched experts amaze the judge.","Back in June we delivered oxygen equipment of the same size.","The wizard quickly jinxed the gnomes before they vaporized.","We promptly judged antique ivory buckles for the next prize.","Jim quickly realized that the beautiful gowns are expensive.","How razorback-jumping frogs can level six piqued gymnasts!","Just keep examining every low bid quoted for zinc etchings","The job of waxing linoleum frequently peeves chintzy kids.","Jack quietly moved up front and seized the big ball of wax.","Big July earthquakes confound zany experimental vow.","Sixty zips were quickly picked from the woven jute bag.","Why shouldn’t a quixotic Kazakh vampire jog barefoot?","Then a cop quizzed Mick Jagger’s ex-wives briefly.","As quirky joke, chefs won’t pay devil magic zebra tax.","By Jove, my quick study of lexicography won a prize.","Cozy lummox gives smart squid who asks for job pen.","Amazingly few discotheques provide jukeboxes.","My faxed joke won a pager in the cable TV quiz show.","GQ jock wears vinyl tuxedo for showbiz promo.","My ex pub quiz crowd gave joyful thanks.","Sphinx of black quartz, judge my vow!","Five quacking zephyrs jolt my wax bed."];

async function Pangrams() {
    let selectedTextNodes = [];
    for (const node of figma.currentPage.selection) {
        if (node.type === "TEXT") {
            if (node.hasMissingFont) {
                figma.closePlugin("Can't replace text with missing fonts");
            }
            await figma.loadFontAsync(node.fontName);
            selectedTextNodes.push(node);
        }
    }
    if (selectedTextNodes.length === 0) {
        figma.closePlugin("You must select at least one text node");
    }
    for (const node of selectedTextNodes) {
        const random = randomFromArray(pangrams);
        node.characters = random;
    }
    figma.closePlugin();
}
function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
Pangrams();
})(typeof exports != "undefined" ? exports : (typeof global != "undefined" ? global : typeof self != "undefined" ? self : this)["plugin"] = {});

//#sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLlVzZXJzLmptZWd1ZXJpYW4uRGV2ZWxvcGVyLmZpZ21hLXBsdWdpbi1wYW5ncmFtcy5idWlsZC5wbHVnaW4uanMubWFwIiwic291cmNlcyI6WyIuLi9wYW5ncmFtcy5qc29uIiwiLi4vcGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsQ0FBQyx3Q0FBd0MsQ0FBQyx3Q0FBd0MsQ0FBQyx3Q0FBd0MsQ0FBQyx1Q0FBdUMsQ0FBQyx3Q0FBd0MsQ0FBQyx1Q0FBdUMsQ0FBQywwQ0FBMEMsQ0FBQyw4Q0FBOEMsQ0FBQyw2Q0FBNkMsQ0FBQywrQ0FBK0MsQ0FBQyxrREFBa0QsQ0FBQyxtREFBbUQsQ0FBQyx1REFBdUQsQ0FBQyx3REFBd0QsQ0FBQywwREFBMEQsQ0FBQyw4REFBOEQsQ0FBQyw4REFBOEQsQ0FBQyw2REFBNkQsQ0FBQyw4REFBOEQsQ0FBQyw4REFBOEQsQ0FBQyw0REFBNEQsQ0FBQyw0REFBNEQsQ0FBQyw0REFBNEQsQ0FBQyw2REFBNkQsQ0FBQyxzREFBc0QsQ0FBQyx5REFBeUQsQ0FBQyx1REFBdUQsQ0FBQyxvREFBb0QsQ0FBQyx3REFBd0QsQ0FBQyxzREFBc0QsQ0FBQyxxREFBcUQsQ0FBQywrQ0FBK0MsQ0FBQyxzREFBc0QsQ0FBQywrQ0FBK0MsQ0FBQywwQ0FBMEMsQ0FBQyx1Q0FBdUMsQ0FBQyx3Q0FBd0M7O0FDR3A1RCxlQUFlLFFBQVE7SUFDckIsSUFBSSxpQkFBaUIsR0FBZSxFQUFFLENBQUE7SUFFdEMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBRXhCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO2FBQzNEO1lBRUQsTUFBTSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFvQixDQUFDLENBQUE7WUFFcEQsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO0tBQ0Y7SUFFRixJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO0tBQzNEO0lBRUEsS0FBSyxNQUFNLElBQUksSUFBSSxpQkFBaUIsRUFBRTtRQUNwQyxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUE7S0FDekI7SUFDRCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7QUFDckIsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLEtBQW9CO0lBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQ3hELENBQUM7QUFFRCxRQUFRLEVBQUUsQ0FBQTs7OzsiLCJzb3VyY2VSb290IjoiLi4ifQ==
