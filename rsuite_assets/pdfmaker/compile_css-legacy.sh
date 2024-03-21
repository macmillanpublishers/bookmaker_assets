#!/bin/sh
## run like so: `sh compile_css.sh`
## shouldn't matter where you run it from, but is dependent on relative paths, so don't move the script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR/css/torDOTcom
sass novella-looser1.scss novella-looser1.css
sass novella-looser2.scss novella-looser2.css
sass novella-tighter1.scss novella-tighter1.css
sass novella-tighter2.scss novella-tighter2.css
sass novel.scss novel.css
sass novel-loose.scss novel-loose.css
sass novel-tight.scss novel-tight.css
sass novella.scss pdf.css
sass novella.scss novella.css # using this scss for default 'pdf.css' as well as its own named template

## scrapping default core in favor of global templates
cd ../generic
sass default_core.scss default_core.css  # using this as a default base css for other imprints
mv default_core.css ../default_core.css

cd ../global_templates
sass novella.scss novella.css
sass novella-loose.scss novella-loose.css
sass novella-tight.scss novella-tight.css
sass novel.scss novel.css
sass novel-loose.scss novel-loose.css
sass novel-tight.scss novel-tight.css

cd ../holt
sass nonfiction-6x9.scss pdf.css
sass nonfiction-55x825.scss nonfiction-55x825.css
sass nonfiction-6x9.scss nonfiction-6x9.css # using this scss for default 'pdf.css' as well as its own named template
sass fiction-55x825.scss fiction-55x825.css
sass fiction-6x9.scss fiction-6x9.css
# cd ../tor
# sass pdf.scss pdf.css
cd ../flatiron
sass flatiron.scss pdf.css
