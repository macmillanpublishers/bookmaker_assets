#!/bin/sh
## run from script directory like: `sh compile_css.sh`
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR/css/torDOTcom
sass novella-looser1.scss novella-looser1.css
sass novella-tighter1.scss novella-tighter1.css
sass novella-tighter2.scss novella-tighter2.css
sass novel.scss novel.css
sass novel-loose.scss novel-loose.css
sass novel-tight.scss novel-tight.css
sass novella.scss pdf.css
sass novella.scss novella.css # using this scss for default 'pdf.css' as well as its own named template
sass novella.scss core_tor.css # also using this as a default base for other imprints etc
mv core_tor.css ../
cd ../holt
sass nonfiction-6x9.scss pdf.css
sass nonfiction-55x825.scss nonfiction-55x825.css
sass nonfiction-6x9.scss nonfiction-6x9.css # using this scss for default 'pdf.css' as well as its own named template
sass fiction-55x85.scss fiction-55x85.css
sass fiction-6x9.scss fiction-6x9.css
cd ../tor
sass pdf.scss pdf.css
# cd ../flatiron
# sass pdf.scss pdf.css
