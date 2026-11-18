import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Font Awesome would add its own <style> to the page. That CSS sits outside
// Tailwind's layers, so it would beat Tailwind classes like h-6 or sr-only.
// We turn it off here and load the same CSS in globals.css, inside the
// "base" layer, where Tailwind classes win.
// Every component uses <Icon> instead of FontAwesomeIcon, so this always
// runs before the first icon is drawn.
config.autoAddCss = false;

export default FontAwesomeIcon;
